//* Menentukan navigasi berdasarkan status autentikasi.
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';
import { useAuthStore } from '../store/store'; // Import store auth dari zustand

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuthStore(); // Ambil status autentikasi dari zustand store

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <DrawerNavigator />
      ) : (
        <StackNavigator />
      )}
    </NavigationContainer>
  );
}

export default AppNavigator;
