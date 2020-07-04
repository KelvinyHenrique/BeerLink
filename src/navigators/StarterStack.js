import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import QrScanner from '../screens/QrScanner';
import Congratulations from '../screens/Congratulations';
import Mapa from '../screens/Map';
import Live from '../screens/Live';
import Tests from '../screens/ScreenTests';
import Model from '../screens/Models';
import Ar from '../screens/Ar';
import Private from '../screens/Private';
import Profile from '../screens/Profile';
const Stack = createStackNavigator();

export default function TransationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FirstScreen"
        component={Profile}
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
        name="Live"
        component={Live}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="RoutesText"
        component={Tests}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="QrScanner"
        component={QrScanner}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Mapa"
        component={Mapa}
        options={{
          headerShown: false,
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
      <Stack.Screen
        name="Model"
        component={Model}
        options={{
          title: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Live}
        options={{
          title: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Private"
        component={Private}
        options={{
          title: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
