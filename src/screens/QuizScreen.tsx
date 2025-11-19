import React, { useMemo, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './components/PrimaryButton';

type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  answer: number;
};

const buildSampleQuiz = (): QuizQuestion[] => [
  {
    id: 'q1',
    prompt: 'Gemini prompts work best when they include which element?',
    options: ['Detailed context', 'Random emojis', 'Short single words', 'Large binary blobs'],
    answer: 0,
  },
  {
    id: 'q2',
    prompt: 'Which Firebase product would you use to sync quiz progress across devices?',
    options: ['Cloud Firestore', 'Firebase Hosting', 'Firebase Remote Config', 'Firebase App Check'],
    answer: 0,
  },
  {
    id: 'q3',
    prompt: 'What hook in React Native lets you manage local component state?',
    options: ['useMemo', 'useState', 'useEffect', 'useReducer'],
    answer: 1,
  },
];

const QuizScreen = (): React.JSX.Element => {
  const questions = useMemo(buildSampleQuiz, []);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQuestion = questions[index];

  const handleAnswer = (selectionIndex: number) => {
    if (completed) {
      return;
    }

    if (selectionIndex === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }

    const nextIndex = index + 1;
    if (nextIndex >= questions.length) {
      setCompleted(true);
    } else {
      setIndex(nextIndex);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setIndex(0);
    setCompleted(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Daily Practice Quiz</Text>
        {completed ? (
          <View style={styles.resultCard}>
            <Text style={styles.resultTitle}>Great work!</Text>
            <Text style={styles.resultScore}>
              {score}/{questions.length} correct
            </Text>
            <PrimaryButton label="Try Again" onPress={handleRestart} />
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.prompt}>{currentQuestion.prompt}</Text>
            {currentQuestion.options.map((option, optionIndex) => (
              <PrimaryButton
                key={option}
                label={option}
                onPress={() => handleAnswer(optionIndex)}
              />
            ))}
            <Text style={styles.progress}>
              Question {index + 1} of {questions.length}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  prompt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: 20,
  },
  progress: {
    marginTop: 12,
    textAlign: 'center',
    color: '#475569',
  },
  resultCard: {
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1d4ed8',
    marginBottom: 12,
  },
  resultScore: {
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
});

export default QuizScreen;
