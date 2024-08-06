import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen/LoginScreen';
import DashboardScreen from '../screens/Dashboard/DashboardScreen'; // Import layar lain yang diperlukan
import useStore from '../store/store';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const { isLoggedIn } = useStore();

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
