import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorTabNavigator from './tabdoctor';
import Notification_med from './notification_med';
import Nouveau_doss from './nouveau_doss';
import Profilmed from './profilmed';
import Modifier_doss from './modifier_doss';
import Consultdossmed from './consultdossmed';
import Login from './login';



const Stack = createStackNavigator();

 export default function Stacknavmed() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="DoctorTabNavigator"
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
        <Stack.Screen name="DoctorTabNavigator" component={DoctorTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Notification_med" component={Notification_med} options={{ headerShown: true }} />
      <Stack.Screen name="Nouveau_doss" component={Nouveau_doss} options={{ headerShown: true }} />
      <Stack.Screen name="Profilmed" component={Profilmed} options={{ headerShown: true }} />
      <Stack.Screen name="Modifier_doss" component={Modifier_doss} options={{ headerShown: true }} />
      <Stack.Screen name="Consultdossmed" component={Consultdossmed} options={{ headerShown: true }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

