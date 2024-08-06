//* Menentukan navigasi berdasarkan status autentikasi.
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import DrawerNavigator from './DrawerNavigator';
import  useAuth  from '../hooks/useAuth'; // Contoh hook untuk mengatur autentikasi

const Drawer = createDrawerNavigator();

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Contoh pengaturan autentikasi

  return (
    <NavigationContainer>
         <StackNavigator />
      {/* {isAuthenticated ? (
        <DrawerNavigator />
      ) : (
        <StackNavigator />
      )} */}
    </NavigationContainer>
  );
}

export default AppNavigator;
