import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import FirstPage from './pages/auth/FirstPage';

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage" screenOptions={{ headerShown:false }}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
