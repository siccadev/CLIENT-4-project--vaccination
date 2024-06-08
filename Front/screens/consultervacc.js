import React from 'react';
import { View, Text, StyleSheet,SafeAreaView, TouchableOpacity,Image,ScrollView } from 'react-native';



export default function Consultervacc() {
 

  return (
    <SafeAreaView
        style={{flex:1}} 
        >
        <ScrollView  style={{backgroundColor:"#D7DBDF"}}>
         <View style={styles.header}>
            <Text style={styles.headerText}>Consulter vaccin</Text>
        </View>
        <View
             style = {{
                backgroundColor: "white",
                paddingTop: 50,
                paddingBottom: 50,
                top:-10,
                height:480,
                marginHorizontal:300, 
                marginTop:60,
                borderRadius:10,
                right:40    
            }}>
            <View style={{flexDirection:"row", left:35,}}>
            <Text style={styles.text1}>
                {"Identifiant :"}
            </Text>
            <Text
                style={styles.text2}>
                {"12352435"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Nom du vaccin :"}
            </Text>
            <Text
                style={styles.text2}>
                {"Pneumocoque"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Type de vaccin :"}
            </Text>
            <Text
                style={styles.text2}>
                {"Public"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Pays :"}
            </Text>
            <Text
                style={styles.text2}>
                {"Tunis"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Lieu d'administration :"}
            </Text>
            <Text
                style={styles.text2}>
                {"Tunis"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Numéro de lot :"}
            </Text>
            <Text
                style={styles.text2}>
                {"1221"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Numero de série :"}
            </Text>
            <Text
                style={styles.text2}>
                {"1094"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Les ages de vaccin :"}
            </Text>
            <Text
                style={styles.text2}>
                {"2 mois/4 mois/11 mois"}
            </Text>
            </View>
            <View style={{flexDirection:"row", left:35,marginTop:10}}>
            <Text style={styles.text1}>
                {"Description :"}
            </Text>
            <Text
                style={styles.text2}>
                {"Cette bactérie est à l'origine de neumbreuses infections\n (otits, méningites, pneumonies)"}
            </Text>
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
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginLeft:120,
    right: 30,
  },
  headerText: {
    top: 35,
    fontSize: 27,
    fontWeight: '550',
    left: 135,
    marginBottom: 50,
  },
  home: {
    height: 50,
    width: 50,
    top: 23,
    left: 120,
    marginBottom: 30,
  },
  text1: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft:60
  },
  text2: {
    color: "black",
    fontSize: 17,
    fontWeight: "600",
    marginLeft:15,
    
  }  
});
