import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../screens/LandingScreen';
import QuizScreen from '../screens/QuizScreen';
import ChatBotScreen from '../screens/ChatBotScreen';

export type RootStackParamList = {
  Landing: undefined;
  Quiz: undefined;
  ChatBot: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = (): React.JSX.Element => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{ title: 'Quiz Genie' }}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Daily Quiz' }}
      />
      <Stack.Screen
        name="ChatBot"
        component={ChatBotScreen}
        options={{ title: 'Gemini Chat' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
