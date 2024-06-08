import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TextInput, TouchableOpacity, Button, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Accueil_parent() {
  
    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#FEEEFF",
                    pointerEvents: "none",

                }}>
                <View style={{

                    marginTop: 50,
                    flexDirection: "row",
                }}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginLeft: 30,
                            marginBottom: 30,
                            textDecorationLine: 'underline',
                        }}>
                        {"Accueil"}
                    </Text>
                    
                    <View

                        style={{
                            backgroundColor: "#FBB8D9",
                            flex: 1,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            flexDirection: "column",
                            marginLeft: -80,
                            width: 170,
                            height: 200,
                            marginTop: 70,


                        }}>

                        <TouchableOpacity><Image source={require('../assets/enfant (1).png')} style={{ width: 80, height: 80, left: 50, marginBottom: 30, marginTop: 40 }} />
                            <Text style={{
                                fontWeight: "bold",
                                left: 50,
                            }} >Asil Heni {"\n"}{'   '}2 mois</Text></TouchableOpacity>

                    </View>
                    <View
                        style={{
                            backgroundColor: "#97C7F3",
                            flex: 1,
                            borderRadius: 10,

                            borderColor: 'transparent',
                            marginLeft: 10,
                            width: 170,
                            height: 200,
                            marginTop: 70,
                            marginRight: 20,
                        }}>
                        <TouchableOpacity><Image source={require('../assets/garcon.png')} style={{ width: 80, height: 80, left: 50, marginBottom: 30, marginTop: 40 }} />
                            <Text style={{
                                fontWeight: "bold",
                                left: 50,
                            }} >Adel Heni {"\n"}{'   '}1 ans</Text>
                        </TouchableOpacity>
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
    rectangle: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: "column",

        flex: 1,
        marginHorizontal: 30,
        width: 350,
        height: 150,
        marginBottom: 20,
    },
    text: {
        color: "#ffffff",
        fontSize: 15,
        marginBottom: 23,
        left: 11,
    },
    text1: {
        color: "#ffffff",

        fontSize: 15,
        marginBottom: 10,
        fontWeight: "bold",
        left: 11,
    },
    image: {
        width: 30,
        height: 30,
        marginBottom: 20,
        left: 11,
        top: 2,
    },


});