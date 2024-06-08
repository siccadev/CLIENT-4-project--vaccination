import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, RadioForm, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';


export default function Nouveau_doss() {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };
    
    return (
        <SafeAreaView
            style={{
                flex: 1,

            }}>
            <ScrollView
                style={{
                    flex: 1,
                    borderRadius: 25,
                    

                }}>
                <View
                    style={{
                        backgroundColor: "#FEEEFF",
                        paddingTop: 50,
                        paddingBottom: 60,
                        top: -10,
                        

                    }}>
                    <Text
                        style={{
                            color: "#000000",
                            fontSize: 20,
                            fontWeight: "bold",
                            marginLeft: 30,
                            marginBottom: 30,
                            marginTop:20,
                            textDecorationLine: 'underline',
                        }}>
                        {"Crée un nouveau dossier"}
                    </Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/calendar-icon.png.png')} style={{ width: 40, height: 40, left: 320, marginBottom: 10 }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../assets/boy.png')} style={{ width: 70, height: 70, marginBottom: 40, left: 110 ,borderRadius:30}} />
                        <Image source={require('../assets/fille.png')} style={{ width: 70, height: 70, marginBottom: 40, left: 160, right: 10,borderRadius:30 }} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                        <Text style={styles.foufa}>Sexe :</Text>
                        {options.map((option) => (
                            <TouchableOpacity
                                key={option.value}
                                style={{ flexDirection: 'row', alignItems: 'center', marginRight: 90, bottom: 25, marginTop: 20 }}

                                onPress={() => handleSelectOption(option.value)}
                            >
                                <Text style={{ marginRight: 15 }}>{option.label}</Text>
                                <View
                                    style={[
                                        { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
                                        { backgroundColor: selectedOption === option.value ? '#007bff' : '#fff' },
                                    ]}
                                >

                                    {selectedOption === option.value && <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#007bff' }} />}
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 32,
                        }}>
                        <TextInput
                            placeholder='Nom et Prenom'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>

                        </TextInput>
                    </View>
                    <View style={styles.container}>
                        <TextInput
                            placeholder='Date de naissance: AAAA/MM/JJ.'
                            keyboardType='numeric'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>
                        <TextInput
                            placeholder='Poids(Kg)'
                            keyboardType='numeric'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                        </TextInput>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>
                        <TextInput
                            placeholder='Taille(Cm)'
                            keyboardType='numeric'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                        </TextInput>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>
                        <TextInput
                            placeholder='Numero dossier médicale'
                            keyboardType='numeric'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                        </TextInput>
                    </View>
                    <View
                        style={{
                            backgroundColor: "#ffffff",
                            borderColor: "#7776c7",
                            borderTopLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            borderWidth: 1,
                            paddingVertical: 11,
                            paddingHorizontal: 7,
                            marginBottom: 31,
                            marginHorizontal: 34,
                        }}>
                        <TextInput
                            placeholder='Parent'
                            keyboardType='numeric'
                            style={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>
                        </TextInput>
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
                                {"Ajouter"}
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
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
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



