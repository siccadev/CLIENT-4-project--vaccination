import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, TouchableOpacity, TextInput, Button, Image, StatusBar } from 'react-native';


export default function Dossiershistorique() {
    const [data, setData] = useState([
        { age: 'A la naissance', vaccin: 'BCG VHB-0', etat: 'VACCINÉE' },
        { age: 'A 2 mois', vaccin: 'Pentavalent-1+ VPI + VPC-1', etat: 'VACCINÉE' },
        { age: 'A 3 mois', vaccin: 'Pentavalent-2+ VPI', etat: 'Pas Encore', },
        { age: 'A 4 mois', vaccin: 'VPC-2', etat: 'Pas Encore' },
        { age: 'A 6 mois', vaccin: 'Pentavalent-3+ VPO', etat: 'Pas Encore', },
        { age: 'A 11 mois', vaccin: 'VPC-3', etat: 'Pas Encore', },
        { age: 'A 12 mois', vaccin: 'RR-1+ VHA', etat: 'Pas Encore', },
        { age: 'A 18 mois', vaccin: 'DTC-4+VPO+RR-2', etat: 'Pas Encore', },
    ]);

    const toggleState = (index) => {
        const newData = [...data];
        if (newData[index].etat === 'VACCINÉE') {
            newData[index].etat = 'Pas Encore';
        } else {
            newData[index].etat = 'VACCINÉE';
        }
        setData(newData);
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" hidden={false} />
            <ScrollView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>


                    <View style={{ borderWidth: 1, backgroundColor: "#FBB8D9", padding: 30, borderRadius: 10, borderColor: 'transparent', marginLeft: 30, marginRight: 30, marginBottom: 20 }}>
                        <Text style={{ right: 15, opacity: 0.5, bottom: 25 }}>2024/10/09</Text>
                        <View>
                            <View style={styles.Container}>
                                <Text style={{ color: "#000000", fontSize: 13, alignItems: "center", marginTop: -20, opacity: 1, }}>
                                    {'  '}<Text style={styles.boldText}>Nom:</Text> Heni{"\n"}{'  '}
                                    <Text style={styles.boldText}>Prenom:</Text> Asil{"\n"}{'  '}
                                    <Text style={styles.boldText}>Date de naissance:</Text> 2024/06/26{"\n"}{'  '}
                                    <Text style={styles.boldText}>Poids(Kg): </Text> 10 Kg{"\n"}{'  '}
                                    <Text style={styles.boldText}>Taille(cm): </Text> 75 Cm{"\n"}{'  '}
                                    <Text style={styles.boldText}>Numero dossier médicale: </Text> 2216376

                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Age</Text>
                            <View style={styles.verticalBorder} />
                            <Text style={styles.headerText}>Vaccin</Text>
                            <View style={styles.verticalBorder} />
                            <Text style={styles.headerText}>L'etat du vaccin</Text>
                        </View>
                        {data.map((item, index) => (
                            <View key={index} style={[styles.row, index === 0 && styles.blueRow]}>
                                <Text style={styles.cellText}>{item.age}</Text>
                                <View style={styles.verticalBorder} />
                                <Text style={styles.cellText}>{item.vaccin}</Text>
                                <View style={styles.verticalBorder} />
                                <Text style={[styles.cellText, item.etat === 'VACCINÉE' ? styles.greenText : styles.blueText]}>{item.etat}</Text>
                            </View>
                        ))}
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
    boldText: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',

    },
    container1: {
        flex: 1,
        padding: 11,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 10,
        backgroundColor: "#e9f4ff"
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#43349f"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 11,
        backgroundColor: "#e9f4ff"
    },
    cellText: {
        flex: 1,
        textAlign: 'center',
    },
    verticalBorder: {
        width: 1,
        height: '100%',
        backgroundColor: 'black',
    },
    greenText: {
        color: 'green',
    },
    blueText: {
        color: 'blue',
    },
});
