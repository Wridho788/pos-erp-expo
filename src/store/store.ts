import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: async (token: string) => {
    try {
      await AsyncStorage.setItem('userToken', token);
      set({ isAuthenticated: true });
    } catch (error) {
      console.error('Failed to login', error);
    }
  },
  logout: async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      set({ isAuthenticated: false });
    } catch (error) {
      console.error('Failed to logout', error);
    }
  },
}));
