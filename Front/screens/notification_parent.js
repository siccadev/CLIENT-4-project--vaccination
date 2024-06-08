import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity,TextInput, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { EvilIcons } from '@expo/vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Notification_parent({navigation}) {
    const [IsPasswordShown, setIsPasswordShown] = React.useState(true);
    const onPress = () => { navigation.goBack(); };
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
                            marginBottom: 65,
                            marginTop:60,
                            textDecorationLine: 'underline',
                        }}>
                        {"Notification"}
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
                            marginBottom:20
                            
                        }}>
                               
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginTop: 5, opacity: 1, }}>
                                     Votre date de rendez-vous              pour              et <Text style={styles.boldText}>VALIDER</Text>
                                </Text>
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