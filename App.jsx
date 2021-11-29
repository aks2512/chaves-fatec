import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import { CharProvider } from './src/contexts/charContext';

const App = () => {
  return (
    <NavigationContainer>
      <CharProvider>
        <Routes />
        <StatusBar style="light" />
      </CharProvider>
    </NavigationContainer>
  );
};

export default App;