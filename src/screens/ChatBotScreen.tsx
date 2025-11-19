import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import PrimaryButton from './components/PrimaryButton';

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

const buildSeedMessages = (): ChatMessage[] => [
  {
    id: 'm1',
    role: 'assistant',
    content: 'Hi! I am your Gemini study buddy. Ask me anything about your quiz topics.',
  },
  {
    id: 'm2',
    role: 'user',
    content: 'What is a good prompt format for Gemini when generating quizzes?',
  },
  {
    id: 'm3',
    role: 'assistant',
    content:
      'Start with the learning objective, define difficulty, specify the question style, and ask for structured answers.',
  },
];

const ChatBotScreen = (): React.JSX.Element => {
  const initialMessages = useMemo(buildSeedMessages, []);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState('');

  const handleSend = () => {
    if (!draft.trim()) {
      return;
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: draft.trim(),
    };

    // The assistant reply is mocked for now.
    const assistantMessage: ChatMessage = {
      id: `assistant-${Date.now()}`,
      role: 'assistant',
      content: 'Gemini API integration coming soon. For now, this is a static response.',
    };

    setMessages(prev => [...prev, userMessage, assistantMessage]);
    setDraft('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.role === 'assistant' ? styles.assistantBubble : styles.userBubble,
              ]}
            >
              <Text style={styles.messageRole}>{item.role === 'assistant' ? 'Gemini' : 'You'}</Text>
              <Text style={styles.messageText}>{item.content}</Text>
            </View>
          )}
        />
        <View style={styles.composer}>
          <TextInput
            placeholder="Ask Gemini something..."
            style={styles.input}
            value={draft}
            onChangeText={setDraft}
            multiline
          />
          <PrimaryButton label="Send" onPress={handleSend} disabled={!draft.trim()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  listContent: {
    padding: 16,
  },
  messageBubble: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  assistantBubble: {
    backgroundColor: '#1e293b',
    marginRight: '15%',
  },
  userBubble: {
    backgroundColor: '#2563eb',
    marginLeft: '15%',
  },
  messageRole: {
    color: '#e2e8f0',
    fontWeight: '600',
    marginBottom: 6,
  },
  messageText: {
    color: '#f8fafc',
  },
  composer: {
    borderTopWidth: 1,
    borderColor: '#1e293b',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#0f172a',
  },
  input: {
    minHeight: 60,
    maxHeight: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1e293b',
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#e2e8f0',
    marginBottom: 12,
  },
});

export default ChatBotScreen;
