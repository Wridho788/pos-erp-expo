import create from 'zustand';

interface State {
  user: string | null;
  setUser: (user: string | null) => void;
  isLoggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
}

const useStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user, isLoggedIn: !!user }),
  isLoggedIn: false,
  setLoggedIn: (status) => set({ isLoggedIn: status }),
}));

export default useStore;
