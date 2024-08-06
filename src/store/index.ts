import { configureStore } from '@reduxjs/toolkit';
// Import slice Anda di sini

export const store = configureStore({
  reducer: {
    // Tambahkan reducer Anda di sini
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
