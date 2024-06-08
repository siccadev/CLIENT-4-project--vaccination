import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tabparent';
import Accueilparent from './accueilparent';
import Ajouter_redezvous from './ajouter_redezvous';
import Profilparent from './profilparent';
import Consult_doss_parent from './consult_doss_parent';
import Login from './login';
import Notification_parent from './notification_parent';
import Modif_rendezvous from './modif_rendezvous';
import Dossiershistorique from './dossiershistorique';
import Splash from './splash';
import Welcome from './welcome';
import Inscription1 from './inscription1';
import Inscription2 from './inscription2';
import Inscription3 from './inscription3';
import Initmod1_2 from './initmod1_2';
import Initmod3_2 from './initmod3_2';
import Initmod4 from './initmod4';
import DoctorTabNavigator from './tabdoctor';
import Notification_med from './notification_med';
import Nouveau_doss from './nouveau_doss';
import Profilmed from './profilmed';
import Modifier_doss from './modifier_doss';
import Consultdossmed from './consultdossmed';





const Stack = createStackNavigator();

 export default function Stacknavparent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Splash"
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
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Inscription1" component={Inscription1} options={{ headerShown: true }} />
        <Stack.Screen name="Inscription2" component={Inscription2} options={{ headerShown: true }} />
        <Stack.Screen name="Inscription3" component={Inscription3} options={{ headerShown: true }} />
        <Stack.Screen name="Initmod1_2" component={Initmod1_2} options={{ headerShown: true }} />
        <Stack.Screen name="Initmod3_2" component={Initmod3_2} options={{ headerShown: true }} />
        <Stack.Screen name="Initmod4" component={Initmod4} options={{ headerShown: true }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Notification_parent" component={Notification_parent} options={{ headerShown: true}} />
        <Stack.Screen name="Accueilparent" component={Accueilparent} options={{ headerShown: false }} />
        <Stack.Screen name="Ajouter_redezvous" component={Ajouter_redezvous} options={{ headerShown: true }} />
        <Stack.Screen name="Profilparent" component={Profilparent} options={{ headerShown: true }} />
        <Stack.Screen name="Consult_doss_parent" component={Consult_doss_parent} options={{ headerShown: true }} />
        <Stack.Screen name="Modif_rendezvous" component={Modif_rendezvous} options={{ headerShown: true }} />
        <Stack.Screen name="Dossiershistorique" component={Dossiershistorique} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorTabNavigator" component={DoctorTabNavigator } options={{ headerShown: false }} />
        <Stack.Screen name="Notification_med" component={Notification_med} options={{ headerShown: false }} />
        <Stack.Screen name="Nouveau_doss" component={Nouveau_doss} options={{ headerShown: false }} />
        <Stack.Screen name="Profilmed" component={Profilmed} options={{ headerShown: false }} />
        <Stack.Screen name="Modifier_doss" component={Modifier_doss} options={{ headerShown: false }} />
        <Stack.Screen name="Consultdossmed" component={Consultdossmed} options={{ headerShown: false }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

