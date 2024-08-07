import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from './src/ThemeContext';
import AppNavigator from './src/navigation/AppNavigator';



const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'DMSerifDisplay-Regular': require('./assets/fonts/DMSerifDisplay-Regular.ttf'),
      'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
      'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
      'Urbanist-Semibold': require('./assets/fonts/Urbanist-SemiBold.ttf')
    });
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />;
  }


  return (
   <ThemeProvider >
        <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
