import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, TextInput ,bottom} from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Headermed from './headermed';

export default function Listes_dossier({navigation}) {
    const [searchText, setSearchText] = React.useState('');

    const handleSearchChange = (text) => {
        setSearchText(text);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Headermed navigation={navigation} />
            <ScrollView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
                <View style={{ backgroundColor: "#F2F2F2" }}>
                    <Text style={{ color: "#000000", fontSize: 20, fontWeight: "bold", marginLeft: 30, marginBottom: 30, textDecorationLine: 'underline' }}>
                        {"Listes des dossiers"}
                    </Text>
                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={24} color="black" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Rechercher..."
                            onChangeText={handleSearchChange}
                            value={searchText}
                        />
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../assets/calendar-icon.png.png')} style={{ width: 40, height: 40, left: 320, marginBottom: 10,bottom:10 }} />
                    </TouchableOpacity>
                    <View style={{ borderWidth: 1, backgroundColor: "#CFE8FF", padding: 60, borderRadius: 10, borderColor: 'transparent', marginLeft: 30, marginRight: 30, marginBottom:10}}>
                        <View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("Consultdossmed")}>
                                    <Text style={styles.buttonText}>Suivi Enfant</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button1}  onPress={()=>navigation.navigate("Modifier_doss")}>
                                    <Text style={styles.buttonText}>Modifier Dossier</Text>
                                </TouchableOpacity>
                                <View style={{ color: "#000000", alignItems: "center", marginTop: -50, marginBottom: -10, opacity: 1,right:180}}>
                                    
                                    <Text style={[styles.boldText,{right:10,fontSize: 13}]}>Nom et Prénom:</Text>
                                    <Text style={[styles.boldText,{fontSize: 13}]}>Date de naissance:</Text> 
                                    <Text style={[styles.boldText,{right:43,fontSize: 13}]}>Poids:</Text> 
                                    <Text style={[styles.boldText,{right:46,fontSize: 13}]}>Taille:</Text>
                                    <Text style={[styles.boldText,{right:20,fontSize: 13}]}>Num dossier:</Text>
                                    <Text style={[styles.boldText,{right:40,fontSize: 13}]}>Parent:</Text>
                              
                                </View>
                                <Image source={require('../assets/boy.png')} style={{ right:370, bottom:55, width: 40, height: 40, borderRadius: 50 }} />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("Nouveau_doss")}>
                    <Image source={require('../assets/new folder.png')} style={{width:50,height:50,left:300,marginTop:200}}/>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 150 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
        borderRadius: 50,
        padding: 10,
        marginHorizontal: 90,
        right:50

        
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
       
    },
    button1: {
        backgroundColor: '#64BDF9',
        paddingVertical: 6,
        paddingHorizontal: 9,
        borderRadius: 20,
        marginLeft: 20,
        top:65,
        right:5
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 9,
    },
    boldText: {
        fontWeight: 'bold',
    },
});
