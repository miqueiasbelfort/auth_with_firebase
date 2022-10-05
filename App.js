import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//pages
import Login from './src/pages/Login';
import Register from "./src/pages/Register"
import Home from "./src/pages/Home"

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        <Stack.Screen
          name='Login'
          component={Login}
        />
        <Stack.Screen
          name='Register'
          component={Register}
        />
        <Stack.Screen
          name='Home'
          component={Home}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

