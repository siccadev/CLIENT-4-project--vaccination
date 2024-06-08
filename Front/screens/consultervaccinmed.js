import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import Headermed from './headermed';

export default function Consulter_vaccinmed({ navigation }) {
    const [showDetails1, setShowDetails1] = React.useState(false);
    const [showDetails2, setShowDetails2] = React.useState(false);
    const scrollViewRef = React.useRef();

    const handleDetailPress1 = () => {
        setShowDetails1(!showDetails1);
        if (!showDetails1 && scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    const handleDetailPress2 = () => {
        setShowDetails2(!showDetails2);
        if (!showDetails2 && scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Headermed navigation={navigation} />
            <ScrollView
                ref={scrollViewRef}
                style={{ flex: 1, backgroundColor: "#F2F2F2", bottom: 20 }}
                >
                <View style={{ marginTop: 20 }}>
                    <Text style={{ color: "#000000", fontSize: 20, fontWeight: "bold", marginLeft: 30, marginBottom: 30, textDecorationLine: 'underline' }}>
                        {"Consulter la liste des vaccins"}
                    </Text>
                    <View style={{ borderWidth: 1, backgroundColor: "#fff7fc", padding: 45, borderRadius: 10, borderColor: 'transparent', marginLeft: 30, marginRight: 30, marginTop: 30 ,borderColor:"#8b93ff"}}>
                        <View>
                            <View style={styles.Container}>
                                <View style={{ color: "#000000", fontSize: 13, alignItems: "center", marginLeft: -20, marginTop: -40, opacity: 1 }}>
                                    <Text style={[styles.boldText,{fontSize: 13}]}>Date d’ajout du vaccin:</Text>
                                    <Text style={[styles.boldText,{fontSize: 13,right:24}]}>Nom du vaccin:</Text>
                                    <Text style={[styles.boldText,{fontSize: 13,right:24}]}>Type de vaccin:</Text>
                                </View>
                                {!showDetails2 && (
                                    <TouchableOpacity onPress={handleDetailPress2}>
                                        <View style={{ width: 150, height: 30, backgroundColor: "#64BDF9", borderRadius: 60, paddingVertical: 8, right: 160, top:35 }}>
                                            <Text style={{ color: "#fffbfb", marginLeft: 20, fontSize: 10, fontWeight: "bold" }}>
                                                {"Plus de détails"}
                                            </Text>
                                            <FontAwesome name="chevron-right" size={13} color="black" style={{ bottom: 11, marginLeft: 110 }} />
                                        </View>
                                    </TouchableOpacity>
                                )}
                            </View>
                            {showDetails2 && (
                                <View style={styles.Container}>
                                    <View style={{ color: "#000000", fontSize: 13, alignItems: "center", marginLeft: -20, opacity: 1 }}>
                                        <Text style={[styles.boldText,{fontSize: 13,right:55}]}>Paye:</Text>
                                        <Text style={[styles.boldText,{fontSize: 13,}]}>Lieu d’administration:</Text>
                                        <Text style={[styles.boldText,{fontSize: 13,right:23}]}>Numero du lot:</Text>
                                        <Text style={[styles.boldText,{fontSize: 13,right:15}]}>Numero de série:</Text>
                                        <Text style={[styles.boldText,{fontSize: 13,right:7}]}>Les ages de vaccin:</Text>
                                        <Text style={[styles.boldText,{fontSize: 13,right:32}]} numberOfLines={3}>Description:</Text>
                                    </View>
                                    <TouchableOpacity onPress={handleDetailPress2}>
                                        <View style={{ width: 80, height: 30, backgroundColor: "#64BDF9", borderRadius: 60, paddingVertical: 8, top: 85, right: 160 }}>
                                            <Text style={{ color: "#fffbfb", justifyContent: "center", marginLeft: 20, fontSize: 10, fontWeight: "bold",}}>
                                                {"Retour"}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </View >
                    <View style={{ height: 100 }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    boldText: {
        fontWeight: 'bold',
    },
});
