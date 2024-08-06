import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { ThemeProvider } from './src/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
  });
};

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <ThemeProvider>
      <AppNavigator/>
    </ThemeProvider>
  );
};

export default App;
