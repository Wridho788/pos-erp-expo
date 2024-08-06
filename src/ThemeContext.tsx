import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import theme from './style/theme';

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
