//import * as React from 'react';
import { StyleSheet,} from 'react-native';
import Splash from './screens/splash';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Welcome,Inscription1,Inscription2,Inscription3} from './screens';



const Stack = createNativeStackNavigator() ;
export default function Appstack() {
  return <NavigationContainer>
  <Stack.Navigator screenOptions={{ 
    headerStyled: {
      backgroundColor: 'transparent'
    },
    headerTitle:'',
    headerTransparent: true,
    headerLeftContainer:{
      paddingLeft: 20,
    }
    
  }}
  initialRouteName="Splash">
    <Stack.Screen
    name='Splash'
    component={Splash}
    options={{HeaderShown:false}}/>
    <Stack.Screen
    name='Welcome'
    component={Welcome}
    options={{headerBackVisible:false}}/>
    <Stack.Screen
    name='Login'
    component={Login}
    options={{HeaderShown:false}}/>
    <Stack.Screen
    name='Inscription1'
    component={Inscription1}
    options={{HeaderShown:false}}/>
    <Stack.Screen
    name='Inscription2'
    component={Inscription2}
    options={{HeaderShown:false}}/>
    <Stack.Screen
    name='Inscription3'
    component={Inscription3}
    options={{HeaderShown:false}}/>
  </Stack.Navigator>
//</NavigationContainer>
}
const styles = StyleSheet.create({
  
});



