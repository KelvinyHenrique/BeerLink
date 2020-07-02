import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import VirtualBar from '../screens/VirtualBar';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import QrScanner from '../screens/QrScanner';
import Congratulations from '../screens/Congratulations';
import Mapa from '../screens/Map';

const Stack = createStackNavigator();

export default function TransationsStack() {
  return (
       <Stack.Navigator>
         <Stack.Screen name="VirtualBar" component={VirtualBar}  options={{
          headerShown:false,
        }}/>  
    <Stack.Navigator>
      <Stack.Screen
        name="QrScanner"
        component={Mapa}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#BA0C2F',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#BA0C2F',
          },
          headerTintColor: '#fff',
        }}
      />
    
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
