import React from "react";
import { View,Text,StyleSheet ,ScrollView,Image,SafeAreaView, ImageBackground} from "react-native";


export default function Accueil() {
   
    return(
            <SafeAreaView style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <ScrollView>
                    <View style={{flexDirection:"row"}}>
                        <Image style={styles.home} source={require('../assets/Home.png')}/>
                        <Text style={styles.Accueil}>Accueil</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 150,
                    }}>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Nombre Des Médecins</Text>
                            <Image
                                source={require('../assets/courbe.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>0 Compte{"\n"}Validés</Text>
                        </View>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Nombre Des Enfants</Text>
                            <Image
                                source={require('../assets/etiquette.png')}
                                style={{width:33,height:33,marginBottom: 23,left:7,top:2,}}
                            />
                            <Text style={styles.text}>0 Enfants</Text>
                        </View>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Nombre Des Parents</Text>
                            <Image
                                source={require('../assets/diament.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>0 Compte{"\n"}Parents</Text>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: 'gray', width: 900, marginTop: 140, left:30, }} />
                </ScrollView>
            </SafeAreaView>
    );

};
const styles = StyleSheet.create({
    Accueil:{
        top:35,
        fontSize:28,
        fontWeight:550,
        left:35,
    },
    home:{
        height:50,
        width:50,
        top:25,
        left:20,
    },
    rectangle: {
        paddingTop: 20,
        paddingHorizontal: 20,
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        marginHorizontal: 30,
        width:260,
        height:235,
    },
    text: {
        color: "#ffffff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 23,
    },
    text1:{
        color:"#ffffff",
        fontWeight: "410",
        fontSize:18,
        marginBottom:10,
    },
    image: {
        width: 25,
        height: 25,
        marginBottom: 32,
        left:11,
        top:2,
    },
 
});
