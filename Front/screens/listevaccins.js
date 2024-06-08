import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, FlatList,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Listevaccins({navigation}) {
  const [vaccin, setVaccin] = useState([
    {
      date: "2024/02/01",
      nom: "pneumocoque",
      type: "public"
    },
  ]);

  const UserItem = ({ vaccin }) => {
    return (
      <View style={styles.vaccinItemContainer}>
        <View style={styles.vaccinItem}>
          <View style={styles.vaccinData}>
            <Text style={styles.vaccinInfo1}>{vaccin.date}</Text>
            <Text style={styles.vaccinInfo2}>{vaccin.nom}</Text>
            <Text style={styles.vaccinInfo3}>{vaccin.type}</Text>
            <TouchableOpacity style={styles.icons}  >
                <Ionicons name='eye' size={24} color="magenta" style={{right:120}} onPress={() => navigation.navigate('Consultervacc')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} >
                <MaterialIcons name="edit" size={24} color="magenta" style={{right:100}}  onPress={() => navigation.navigate('Modifvacc')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons}>
                <MaterialIcons name="delete" size={24} color="magenta" style={{right:87}} /> 
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.home} source={require('../assets/vaccinn.png')} />
          <Text style={styles.headerText}>Liste des vaccins</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.labels}>
            <Text style={styles.label1}>Date d'ajout vaccin</Text>
            <Text style={styles.label2}>Nom de vaccin</Text>
            <Text style={styles.label3}>Type de vaccin</Text>
          </View>
          <FlatList
            data={vaccin}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <UserItem vaccin={item} />
            )}
          />
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: 'gray', width: 900, marginTop: 290, left: 115, }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    bottom: 20,
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
    height: 60,
    width: 60,
    top: 23,
    left: 120,
    marginBottom: 30,
  },
  table: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    marginHorizontal: 140,
    marginBottom: 10,
  },
  vaccinItemContainer: {
    flex: 1,
  },
  vaccinItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: 'white',
  },
  vaccinData: {
    flexDirection: 'row',
    flex: 1,
  },
  vaccinInfo1: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    right:45,
    fontSize:15
  },
  vaccinInfo2: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    right:45,
    fontSize:15
  },
  vaccinInfo3: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    right:105,
    fontSize:15
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#8b93ff',
  },
  label1: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    paddingVertical: 5,
    color: '#333',
    left:20,
    fontSize: 14,
  },
  label2: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    paddingVertical: 5,
    color: '#333',
    right:80,
    fontSize: 14,
  },
  label3: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    paddingVertical: 5,
    color: '#333',
    right: 195,
    fontSize: 14,
  },
  icons:{
    flexDirection: 'row',
    left:40
  }
});
