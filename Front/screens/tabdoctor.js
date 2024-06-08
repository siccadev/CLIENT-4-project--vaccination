import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome ,MaterialIcons, FontAwesome5} from '@expo/vector-icons';
import { Accueilmed,Consulter_vaccinmed, Listes_dossier,Déconnexionmed,Consult_rendezvous} from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const DoctorTabNavigator = () => {
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
        name="Accueilmed"
        component={Accueilmed}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={30} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />
      <Tab.Screen
        name="Consulter_vaccinmed"
        component={Consulter_vaccinmed}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="needle" size={30} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />
      <Tab.Screen 
        name="Listes_dossier" 
        component={Listes_dossier}
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
               <FontAwesome name="list-ul" size={26} color={"white"} />
            </View>
          )
        } 
    }}
      />
      <Tab.Screen
        name="Consult_rendezvous"
        component={Consult_rendezvous}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Ionicons name="calendar" size={27} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />
       <Tab.Screen
        name="Déconnexionmed"
        component={Déconnexionmed}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="sign-out" size={27} color={focused ? "#2578F5" : "black"} />
          ),
          }}
      />

     
    </Tab.Navigator>
  );
};

export default DoctorTabNavigator;
