import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Hook untuk mengatur autentikasi
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Ambil status autentikasi dari AsyncStorage
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Failed to check authentication status', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (token: string) => {
    try {
      await AsyncStorage.setItem('userToken', token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
