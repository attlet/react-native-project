import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BotListScreen from './BotListScreen';
import BotInfoScreen from './BotInfoScreen';
import AddBotScreen from './AddBotScreen';
import SignInScreen from './SignInScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName='SignInScreen'
      headerMode='none'
      screenOptions={{}}
    >
      <Stack.Screen
        name='SignInScreen'
        component={SignInScreen}
        options={{title: 'sign in'}}
        />
      <Stack.Screen
        name='BotList'
        component={BotListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BotInfo'
        component={BotInfoScreen}
        options={{ title: 'Bot Info' }}
      />
      <Stack.Screen
        name='AddBot'
        component={AddBotScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
