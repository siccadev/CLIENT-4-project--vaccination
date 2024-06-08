import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './header';


export default function Listes_rdv_parent({navigation}) {
    
    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
            <Header navigation={navigation}/>
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
                            marginBottom: 65,
                            marginTop:10,
                            textDecorationLine: 'underline',
                        }}>
                        {"Liste des rendez-vous"}
                    </Text>
                   
                    <View
                        style={{
                            borderWidth: 1,
                            backgroundColor: "#9ADFBC",
                            padding: 15,
                            borderRadius: 10,
                            borderColor: 'transparent',
                            marginLeft: 30,
                            marginRight: 30,
                            
                        }}>
                               
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginTop: 5, opacity: 1, }}>
                                     Votre date de rendez-vous              pour              et <Text style={styles.boldText}>VALIDER</Text>
                                </Text>
                    </View>
                   
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
                            <TouchableOpacity  onPress={()=>navigation.navigate("Modif_rendezvous")}>
                            <Image source={require('../assets/bouton-modifier.png')} style={{ right: -265, width: 20,bottom:45,height: 20,  }} />
                            </TouchableOpacity>
                                <View style={{ color: "#000000", alignItems: "center", marginLeft: 30, marginTop: -20, opacity: 1, }}>
                                    <Text  style={[styles.boldText,{right:63,fontSize: 13}]}>Nom:</Text>
                                    <Text  style={[styles.boldText,{right:53,fontSize: 13}]}>Prénom:</Text>
                                    <Text  style={[styles.boldText,{right:25,fontSize: 13}]}>Létat de l’enfant:</Text>
                                    <Text  style={[styles.boldText,{right:10,fontSize: 13}]}>Date de rendez-vous:</Text>
                                    
                                </View>
                                <Image source={require('../assets/fille.png')} style={{ right: 210,bottom:25, width: 40, height: 40, borderRadius: 50 }} />
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
                            height:170,
                            
                        }}>
                               
                                <View style={{ color: "#000000", fontSize: 13, alignItems: "center", marginBottom: 15, opacity: 1,marginTop:10 }}>
                                   <Text style={[styles.boldText,{right:100,fontSize: 15,marginBottom:20}]}>Annuler</Text>
                                   <Text style={[styles.boldText,{right:108,fontSize: 13}]}>Note:</Text>
                                    
  
                                </View>
                         
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("Ajouter_redezvous")} >
                    <Image source={require('../assets/new folder.png')} style={{ width:50,height:50,left:310,marginTop:30}} />
                    </TouchableOpacity>
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