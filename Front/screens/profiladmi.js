import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, StatusBar, TouchableOpacity, TextInput } from 'react-native';

export default function Profiladmin() {
    const [isEditing, setIsEditing] = useState(false);
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber]= useState();
    const [ville, setVille] = useState();
    const [sexe, setSexe] = useState();
    const [Spécialité, setSpécialité] = useState();

    const handleModifier = () => {
        setIsEditing(true);
    };

    const handleAnnuler = () => {
        setIsEditing(false);
        setEmail();
        setPhoneNumber();
        setVille();
        setSexe();
        setSpécialité()
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" hidden={false} />
            <ScrollView style={{ flex: 1, backgroundColor: "#cfe8ff8A" }}>
                <View style={{ paddingTop: 30, paddingBottom: 76,height:800}}>
                    <Image
                        source={require('../assets/Avatar.png')}
                        style={{ width: 100, height: 100, marginTop: 25, borderRadius: 65,marginLeft:600 }}
                    />
                    <Text style={{ color: "black", fontSize: 20, fontWeight: "bold", marginTop: 10, marginLeft:580 }}>
                        {"Administrateur"}
                    </Text>

                    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", top: 35, marginLeft: 410,marginBottom:30, }}>
                        {"E-mail"}
                    </Text>
                    <TextInput
                        style={styles.input}
                        />

                    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", top:3,marginLeft:410 ,marginTop:10}}>
                    {"Numéro de téléphone"}
                    </Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", top: 3, marginLeft:410,marginTop:10 }}>
                        {"Ville"}
                    </Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", top: 3, marginLeft:410,marginTop:10 }}>
                        {"Sexe"}
                    </Text>
                    <TextInput
                        style={styles.input}
                    />
                     <Text style={{ color: "black", fontSize: 16, fontWeight: "bold", top: 3, marginLeft:410,marginTop:10 }}>
                        {"Spécialité"}
                    </Text>
                    <TextInput
                        style={styles.input}
                    />

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        {isEditing? (
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={handleSave}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>Enregistrer</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleAnnuler}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>Annuler</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity onPress={handleModifier}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>Modifier</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#ffffff",
        borderColor: "#7776c7AB",
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 11,
        paddingHorizontal: 21,
        marginTop: 10,
        width:550,
        marginLeft:400
    },
    button: {
        width: 126,
        height: 45,
        alignItems: "center",
        backgroundColor: "#2578F5",
        borderRadius: 20,
        paddingVertical: 11,
        marginHorizontal: 20,
        marginTop: 50,
        right:60
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
});