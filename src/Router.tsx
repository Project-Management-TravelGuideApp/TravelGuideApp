import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import FirstPage from './pages/auth/FirstPage';
import Login from './pages/auth/Login';
import HomePage from './pages/user/HomePage';
import SignIn from './pages/auth/SignIn';

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown:false }}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
