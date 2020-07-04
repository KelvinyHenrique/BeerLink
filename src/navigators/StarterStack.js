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
import Live from '../screens/Live';
import Tests from '../screens/ScreenTests';

const Stack = createStackNavigator();

export default function TransationsStack() {
  return (
    <Stack.Navigator>
<<<<<<< HEAD
      <Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
=======


      
<Stack.Screen
        name="FirstScreen"
        component={FirstScreen}
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
>>>>>>> 1d95a31021419d5afabe7914bd76d8507696e0f5
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
<<<<<<< HEAD
        name="SignIn"
        component={SignIn}
=======
        name="Login"
        component={Login}
>>>>>>> 1d95a31021419d5afabe7914bd76d8507696e0f5
        options={{
          title: false,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#BA0C2F',
          },
          headerTintColor: '#fff',
        }}
      />
<<<<<<< HEAD
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: false,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QrScanner"
        component={QrScanner}
        options={{
          title: false,
          headerShown: false,
        }}
      />
=======

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


>>>>>>> 1d95a31021419d5afabe7914bd76d8507696e0f5
      <Stack.Screen
        name="Congratulations"
        component={Congratulations}
        options={{
<<<<<<< HEAD
          title: false,
          headerShown: false,
        }}
      />
=======
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


>>>>>>> 1d95a31021419d5afabe7914bd76d8507696e0f5
      <Stack.Screen
        name="Mapa"
        component={Mapa}
        options={{
<<<<<<< HEAD
=======
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Home"
        component={Home}
        options={{
>>>>>>> 1d95a31021419d5afabe7914bd76d8507696e0f5
          title: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}