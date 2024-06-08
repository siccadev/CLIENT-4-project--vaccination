import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Image, Text, View, TextInput, TouchableOpacity ,StatusBar} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';


export default function Modif_rendezvous() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue1, setSelectedValue1] = useState('');

    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
                 <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ScrollView
                style={{
                    flex: 1,
                    


                }}>
                <View
                    style={{
                        backgroundColor: "#F2F2F2",
                        paddingBottom: 30,
                        


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
                        {"Modifier un rendez-vous"}
                    </Text>


                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={styles.foufa}>Choisir l'enfant</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 32,
                        }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 0, width: 320, marginTop: -15, marginBottom: 15, }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue(itemValue)
                            }>
                            <Picker.Item label="--" value="--" />
                            <Picker.Item label="Asil Heni" value="Asil Heni" />
                            <Picker.Item label="Adel Heni" value="Adel Heni" />

                        </Picker>
                        <TextInput
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>

                        </TextInput>

                    </View>
                    <Text style={styles.foufa}>Choisir le médecin</Text>
                    <View style={styles.container}>
                        <Picker
                            selectedValue={selectedValue1}
                            style={{ height: 0, width: 320, marginTop: -15, marginBottom: -20, }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue1(itemValue)
                            }
                        >
                            <Picker.Item label="--" value="--" />
                            <Picker.Item label="Dr Wafa" value="Dr Wafa" />
                            <Picker.Item label="Dr Amin" value="Dr Amin" />

                        </Picker>
                        <TextInput
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>

                        </TextInput>

                    </View>
                    <Text style={styles.foufa}>Ajouter la date du rendez-vous</Text>
                    <View

                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>
                        <TextInput
                            placeholder='AAAA/MM/JJ'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                           
                        </TextInput>
                    </View>
                    <Text style={styles.foufa}>L'etat de l'enfant</Text>

                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>

                        <TextInput
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",

                            }} multiline={true}>
                            
                        </TextInput>
                        <Image source={require('../assets/ligne.png')} style={{ marginLeft: 240, width: 60, height: 60, marginTop: -25, marginBottom: 5 }} />
                        <TouchableOpacity>
                            <Image source={require('../assets/envoyer.png')} style={{ marginLeft: 290, width: 20, height: 20, marginTop: -40 }} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity>
                        <View
                            style={{
                                width: 200,
                                height: 40,
                                alignItems: "center",
                                backgroundColor: "#3EC27F",
                                borderRadius: 60,
                                paddingVertical: 10,
                                marginHorizontal: 80,
                                top: 20,
                                right: -20,
                            }}>
                            <Text
                                style={{
                                    color: "#fffbfb",
                                    fontSize: 13,
                                    fontWeight: "bold",
                                }}>
                                {"ENVOYER"}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};
const options = [
    { value: 'femme' },
    { value: 'homme' },
];
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top: -5,

    },
    selectedRadioCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#007bff',
    },
    foufa: {
        fontSize: 15,
        fontWeight: "bold",
        marginRight: 70,
        bottom: 15,
        left: 34,


    },
    foufou: {
        marginRight: 10,
    },
    container: {
        backgroundColor: "#ffffff",
        borderColor: "#7776c7",
        borderRadius: 15,
        borderWidth: 1,
        paddingVertical: 11,
        paddingHorizontal: 7,
        marginBottom: 31,
        marginHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
        flex: 1,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    itemText: {
        fontSize: 10,
        fontWeight: "bold",
        marginRight: 10,
    },
    icon: {
        color: "black",
    },
});



