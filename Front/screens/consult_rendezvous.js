import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity,TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Headermed from './headermed';

export default function Consult_rendezvous({navigation}) {
   
    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
            <Headermed navigation={navigation} />
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
                            marginBottom: 30,
                            textDecorationLine: 'underline',
                        }}>
                        {"Consulter rendez-vous"}
                    </Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/calendar-icon.png.png')} style={{ width: 40, height: 40, left: 320, marginBottom: 30,marginTop:-10 }} />
                    </TouchableOpacity>
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#FEE0FF",
                            padding: 50,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            

                        }}>
                        <View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={[styles.button,{right:60,top:5}]}>
                                <Text style={styles.buttonText}>Valider</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.button3,{right:50,top:5}]}>
                                    <Text style={styles.buttonText}>Annuler</Text>
                                </TouchableOpacity>
                                <View style={{ color: "#000000", alignItems: "center", marginLeft: -235, marginTop: -40, opacity: 1, }}>
                                    <Text style={[styles.boldText,{right:6,fontSize: 13}]}>Nom:</Text>
                                    <Text style={[styles.boldText,{right:24,fontSize: 13}]}>L'état de l’enfant:</Text>
                                    <Text style={[styles.boldText,{right:10,fontSize: 13}]}>Date de rendez-vous:</Text>
                                </View>
                                <Image source={require('../assets/fille.png')} style={{ right: 210, marginTop: -50, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                            <View style={{ backgroundColor: "#F4BCE1", borderColor: 'black',  borderRadius: 30, marginLeft: -10, marginRight: -20, marginTop: 10 }}>
                                <Text
                                    style={{ color: "#000000", fontSize: 11, marginTop: 5,marginLeft:20, marginBottom: -1,textDecorationLine: 'underline',fontWeight: "bold", opacity: 0.6 , }}>
                                    {"Note"}
                                </Text>
                                <Image source={require('../assets/ligne.png')} style={{marginLeft:220,width: 30, height: 30,  }} />
                                <TouchableOpacity>
                                <Image source={require('../assets/envoyer.png')} style={{marginLeft:237,width: 20, height: 20,marginTop:-25 }} />
                                </TouchableOpacity>
                                <TextInput placeholder=''
                                style={{color: "#000000",fontSize: 12,marginLeft:25, marginTop:-15}}
                                multiline={true}>
                                </TextInput>
                                
                            </View>
                        </View>
                    </View>

                    <View style={{height:150}}/>

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

    buttonContainer: {

        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#3EC27F',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 90,
        marginBottom: -200,
    },
    button3: {
        backgroundColor: '#F96464',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 10,
        marginBottom: -200,
        right:10,
        top:4,
    },
    button2: {
        backgroundColor: '#3EC27F',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 20,
        top:8,
        marginLeft: 50,
        right:20,
        marginBottom: -200,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
    },
    boldText: {
        fontWeight: 'bold',
    },

});