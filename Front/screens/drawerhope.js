import * as React from 'react';
import { StyleSheet, View, SafeAreaView, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import 'react-native-gesture-handler';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Accueil from './accueiladmin';
import ComptesMédecins from './comptesmédecins';
import ComptesParents from './comptesparents';
import DéconnexionAdmin from './déconnectionadmin';
import Ajoutvaccins from './ajoutervaccin';
import Listevaccins from './listevaccins';
import { FontAwesome5, Entypo, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';



const Drawer = createDrawerNavigator();

export default function DrawerH({navigation}) {

  return (
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <SafeAreaView>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 220,
                  width: '100%',
                  flex: 1,
                  position: "relative"
                }}
              >
                <View
                  style={{
                    marginTop: 40,
                  }}>
                  <Image
                    source={require('../assets/Avatar.png')}
                    style={{
                      height: 130,
                      width: 130,
                      borderRadius: 65,
                      right: 90,
                      top: 10,

                    }}
                  />
                  <View>
                    <Text
                      style={{
                        bottom: 110,
                        left: 50,
                        fontSize: 20,
                        fontWeight: 580,
                      }}> Administrateur</Text>
                    <Text
                      style={{
                        bottom: 65,
                        left: 60,
                        fontSize: 15,
                        fontWeight: 490,
                        color: ' rgb(0, 0, 0, 60%)',
                      }}> Chef de Projet </Text>
                    <Image
                      source={require('../assets/médaille.png')}
                      style={{ height: 27, width: 27, bottom: 75, left: 175 }} />
                  </View>
                </View>
              </View>

              <DrawerItemList {...props} />
              <View>
              <Text style={{
                fontWeight: "bold", fontSize: 18, marginLeft: 35, marginBottom: 1, bottom: 185,
              }}>Gestion comptes</Text>
              <FontAwesome5 name="user-alt" size={22} style={{ flex: 0, position: "absolute", marginLeft: 270, bottom: 187 }} />
              </View>
              <View>
                <Text style={{
                fontWeight: "bold", fontSize: 18, marginLeft: 35, marginBottom: 1, bottom: 360}}>Gestion vaccins</Text>
                 <MaterialCommunityIcons name="needle" size={30} style={{flex:0,position:"absolute", marginLeft:260,bottom:360}}/>
              </View>
            </SafeAreaView>
          )
        }}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff7fc"
          },

          drawerStyle: {
            backgroundColor: 'rgba(254, 39, 126, 0.38)',
            width: 350,

          },
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: 'black',
          drawerActiveBackgroundColor: 'transparent',
          drawerType: 'permanent',

          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity onPress={()=> navigation.navigate("Notifadm")}>
                <FontAwesome name="bell" size={22} color="#635F5F" style={{ marginRight:140}} />
              </TouchableOpacity>
              <View style={{
                flexDirection: "row",
                alignItems: 'center',
                marginLeft:50
              }}>
                <TouchableOpacity onPress={()=> navigation.navigate("Profiladmin")}>
                  <Image
                    source={require('../assets/Avatar.png')}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 65,
                      right: 110,
                    }}
                  />
                </TouchableOpacity>
                <Text style={{
                  fontSize: 15,
                  right: 105,
                }}>Administrateur</Text>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/fleche.png')}
                    style={{ top: 2, height: 15, width: 15, right: 100 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ),
          headerLeft: () => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/logoo.png')}
                style={{ height: 50, width: 55, left: 20, }}
              />
            </View>
          ),
        }}>

        <Drawer.Screen name="Accueil" component={Accueil} options={{
          drawerLabel: "Accueil",
          title: "",
          headerShadowVisible: false,
          drawerLabelStyle: {
            right: 45,
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 30,
            bottom:15
          },
          drawerIcon: ({ focused }) => (
            <Entypo name="home" size={26} style={{ flex: 0, position: "absolute", marginLeft: 250,bottom:25}} color={focused ? "white" : "black"} />
          ),

        }}
        />
        <Drawer.Screen name="Liste vaccins" component={Listevaccins}  options={() => ({
          drawerLabel: "Liste des vaccins",
          title: "",
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 40,
            marginTop:20,
            top:13
            
          },
          drawerIcon: ({ focused }) => (
            <FontAwesome name="caret-right" size={24} style={{ left: 50, top:23 }} color={focused ? "white" : "black"} />
          ),
        })}
        />

        <Drawer.Screen name="Ajouter vaccins" component={Ajoutvaccins} options={() => ({
          drawerLabel: "Ajouter vaccins",
          title: "",
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 40,
            top:10
            
          },
          drawerIcon: ({ focused }) => (
            <FontAwesome name="caret-right" size={24} style={{ left: 50, top:11}} color={focused ? "white" : "black"} />
          ),
        })}
        />
        <Drawer.Screen name="ComptesParents" component={ComptesParents} options={() => ({
          drawerLabel: "Compte parents",
          title: "",
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 40,
            top: 14,
            marginTop:45
          },
          drawerIcon: ({ focused }) => (
            <FontAwesome name="caret-right" size={24} style={{ left: 50, top:36 }} color={focused ? "white" : "black"} />
          ),
        })}
        />

        <Drawer.Screen name="CompteMédecins" component={ComptesMédecins} options={() => ({
          drawerLabel: "Compte Médecins",
          title: "",
          drawerLabelStyle: {
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 40,
            top:12
          },
          drawerIcon: ({ focused }) => (
            <FontAwesome name="caret-right" size={24} style={{ left: 50, top:14}} color={focused ? "white" : "black"} />
          ),
        })}
        />

        <Drawer.Screen name="DéconnexionAdmin" component={DéconnexionAdmin} options={{
          drawerLabel: "Déconnexion",
          title: "",
          headerShadowVisible: false,
          drawerLabelStyle: {
            right: 45,
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 30,
            top: 10,
          },
          drawerIcon: ({ focused }) => (
            <FontAwesome name="sign-out" size={25} style={{ flex: 0, position: "absolute", marginLeft: 253, bottom: 5 }} color={focused ? "white" : "black"} />
          )

        }} />
      </Drawer.Navigator>
  )
}
const styles = StyleSheet.create({
  hayfa: {
    width: 10,
    height: 10,
  },
  admin: {
    textAlign: "left",
    verticalAlign: "top",
    fontWeight: "semi bold",
    fontSize: 27,
    color: "black",
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff7fc',
    opacity: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    right: 600,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#635F5F',
    marginLeft: 10,
  },
});
