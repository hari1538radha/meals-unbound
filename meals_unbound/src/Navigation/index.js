import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../Screens/SignupPage/SignupPage';
import LoginScreen from '../Screens/LoginPage/LoginPage';
import DashBoardPage from '../Screens/DashBoard/DashBoardPage';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }}>
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="DashBoardPage" component={DashBoardPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
