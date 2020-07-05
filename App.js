import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StarterStack from './src/navigators/StarterStack';
import { StatusBar } from 'react-native';

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#BA0C2F',
      background: '#FFF',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
       <StatusBar backgroundColor="#BA0C2F" barStyle="light-content" />
      <StarterStack />
    </NavigationContainer>
  );
};

export default App;
