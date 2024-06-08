import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,Button,Image,ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Headermed from './headermed';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Accueilmed({navigation}) {
  return (
    <SafeAreaView 
    style = {{
        flex: 1,
        
    }}>
         <Headermed navigation={navigation} />
         <ScrollView
            style={{
            flex: 1,
            backgroundColor: "#F2F2F2",
            bottom:20
        }}>
            <View style={{
                 marginTop: 20,
        }}>
            <Text 
                style = {{
                    color: "#000000",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginLeft: 30,
                    marginBottom: 50,
                    textDecorationLine: 'underline',
                }}>
                {"Accueil"}
            </Text>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Nombre Des Enfants</Text>
                            <Image
                                source={require('../assets/courbe.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>0 Enfants</Text>
                        </View>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Les rendez-vous pour aujourd’hui</Text>
                            <FontAwesome name="calendar" size={24} color="white" style={styles.image} />
                            <Text style={{marginLeft:9,bottom:10,color:"white", fontSize:15}}>0 Rendez-vous</Text>
                        </View>
                        </ImageBackground>
                        <ImageBackground source={require('../assets/Bokeeh.png')} style={styles.rectangle}>
                        <View>
                            <Text style={styles.text1}>Les vaccins pour aujourd’hui</Text>
                            <MaterialCommunityIcons name="needle" size={24} color="white" style={styles.image} />
                            <Text style={{marginLeft:9,bottom:10,color:"white", fontSize:15}}>0 Vaccin(s)</Text>
                        </View>
                        </ImageBackground>
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
    flexDirection:'column',
  },
  rectangle: {
    paddingTop: 20,
    paddingHorizontal: 20,
    flexDirection: "column",
    flex: 1,
    marginHorizontal: 50,
    width:250,
    height:150,
    marginBottom: 20,
},
text: {
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 23,
    left:11,
},
text1:{
    color:"#ffffff",
    
    fontSize:15,
    marginBottom:10,
    fontWeight: "bold",
   
},
image: {
    width: 30,
    height: 30,
    marginBottom: 20,
    left:11,
    top:2,
},


});