import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginadmin from './loginadmin';
import DrawerH from './drawerhope';
import Listevaccins from './listevaccins';
import Consultervacc from './consultervacc';
import Modifvacc from './modifvaccinadm';
import Profiladmin from './profiladmi';
import Notifadm from './notifadm';

const Stack = createNativeStackNavigator();

export default function Rout() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DrawerH"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent'
          },
          headerTitle: '',
          headerTransparent: true,
          headerLeftContainerStyle: {
            paddingLeft: 20,
          }
        }}>
        <Stack.Screen
          name='DrawerH'
          component={DrawerH}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Profiladmin'
          component={Profiladmin}
          options={{ headerShown: true }}
        />
         <Stack.Screen
          name='Notifadm'
          component={Notifadm}
          options={{ headerShown: true}}
        />
        <Stack.Screen
          name='Listevaccins'
          component={Listevaccins}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen
          name='Consultervacc'
          component={Consultervacc}
          options={{ headerShown: true }}
        />
         <Stack.Screen
          name='Modifvacc'
          component={Modifvacc}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
