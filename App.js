import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import StarterStack from './src/navigators/StarterStack';

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
      background: '#FFF',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StarterStack />
    </NavigationContainer>
  );
};

export default App;
