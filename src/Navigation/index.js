import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ConfirmationScreen from '../Screens/ConfirmationScreen/ConfirmationScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
