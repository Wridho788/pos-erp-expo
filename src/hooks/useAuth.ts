import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
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

// Check authentication status on initialization
const checkAuth = async () => {
  try {
    const userToken = await AsyncStorage.getItem('userToken');
    useAuthStore.setState({ isAuthenticated: !!userToken });
  } catch (error) {
    console.error('Failed to check authentication status', error);
    useAuthStore.setState({ isAuthenticated: false });
  }
};

// Run checkAuth on initialization
checkAuth();

export default useAuthStore;
