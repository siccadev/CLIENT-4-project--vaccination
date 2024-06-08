import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome ,MaterialIcons} from '@expo/vector-icons';
import Accueilparent from './accueilparent';
import Listes_rdv_parent from './listes_rdv_parent';
import Déconnexion from './déconnexion';
import Suivienfants from './suivienfants';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel:false,
        headerShown: false,
        tabBarStyle:{
            position:"absolute",
            bottom:0,
            right:0,
            left:0,
            height:60,
            backgroundColor:"white"
        }
    }}>
      <Tab.Screen
        name="Accueill"
        component={Accueilparent}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={27} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />
      <Tab.Screen 
        name="Suivienfants" 
        component={Suivienfants}
        options={{
          title:"",
          tabBarIcon:() => {
            return (
            <View style={{
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"#2578F5",
                height:70,
                width:70,
                top:-30,
                borderRadius:35,
                borderWidth:2,
                borderColor:"#ffffff",

            }}>
               <MaterialIcons name="folder" size={22} color={"white"} />
            </View>
          )
        } 
    }}
      />
      <Tab.Screen
        name="Listes_rdv_parent"
        component={Listes_rdv_parent}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="list-ul" size={20} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />
      <Tab.Screen
        name="Déconnexion"
        component={Déconnexion}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="sign-out" size={24}color={focused ? "#2578F5" : "black"} style={{}} />
          ),
          }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;