import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity,TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Notification_med() {
    
    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#F2F2F2",
                    

                }}>
                <View
                    style={{
                        backgroundColor: "#F2F2F2",
                        
                        }}>
                    <Text
                         style={{
                            color: "#000000",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginLeft: 30,
                            marginBottom: 40,
                            marginTop:60,
                            textDecorationLine: 'underline',
                        }}>
                        {"Notification"}
                    </Text>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 30,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            marginTop:20,
                            marginBottom:20,
                         
                        }}>
                        <View>
                           
                            <View style={styles.Container1}>
                                <View style={{ color: "#000000", alignItems: "center", marginLeft: 30,opacity: 1,}}>
                                    <Text style={[styles.boldText,{right:40,fontSize: 13}]}>Nom:</Text>
                                    <Text style={[styles.boldText,{right:30,fontSize: 13}]}>Prénom:</Text>
                                    <Text style={[styles.boldText,{right:1,fontSize: 13}]}>L'état de l’enfant:</Text>
                                    <Text style={[styles.boldText,{left:13,fontSize: 13}]}>Date de rendez-vous:</Text>
                                    
                                </View>
                                <Image source={require('../assets/fille.png')} style={{ right:190,bottom:20, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                        </View>
                    </View>
                   
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#F4999F",
                            padding: 15,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                        }}>
                        <View>
                            <View>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", opacity: 1,marginBottom:80,marginTop:15 }}>
                                    <Text style={{fontWeight:"bold"}}>ALERT</Text> 
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    Container1: {

        alignItems: 'center',
        flexDirection: 'row',
    },
    boldText: {
        fontWeight: 'bold',
        
    },

});