import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import PrimaryButton from './components/PrimaryButton';

type LandingScreenProps = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const LandingScreen = ({ navigation }: LandingScreenProps): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Genie</Text>
        <Text style={styles.subtitle}>
          Generate AI-powered quizzes and chat with our Gemini assistant.
        </Text>
        <PrimaryButton
          label="Start Practice Quiz"
          onPress={() => navigation.navigate('Quiz')}
        />
        <PrimaryButton
          label="Open Gemini Chat"
          onPress={() => navigation.navigate('ChatBot')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#334155',
    marginBottom: 32,
  },
});

export default LandingScreen;
