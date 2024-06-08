import React, { useState } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, StatusBar, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Consultdossmed() {
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

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleState = (index, newState) => {
    if (index >= 0 && index < data.length) {
      setSelectedIndex(index);
      setModalVisible(true);
    }
  };

  const confirmStateChange = async () => {
    if (selectedIndex !== null) {
      setIsLoading(true);
      try {
        const newData = [...data];
        newData[selectedIndex].etat =
          newData[selectedIndex].etat === 'VACCINÉE' ? 'Pas Encore' : 'VACCINÉE';
        setData(newData);
        setModalVisible(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" hidden={false} />
      <ScrollView style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
        <View style={{ backgroundColor: "#F2F2F2", }}>
          <Text style={{ color: "#000000", fontSize: 20, fontWeight: "bold", marginLeft: 30, textDecorationLine: 'underline', marginTop: 50,marginBottom:40 }}>
            {"Dossier médicale"}
          </Text>
          <View style={{borderWidth: 1, backgroundColor: "#FBB8D9", padding: 30, borderRadius: 10, borderColor: 'transparent', marginLeft: 30, marginRight: 30, marginBottom: 20,marginTop:20 }}>
            <View>
              <View style={styles.Container}>
                <View style={{ color: "#000000", alignItems: "center", marginTop: -20, opacity: 1, }}>
                  <Text style={[styles.boldText,{right:70,fontSize: 13}]}>Nom et Prénom:</Text>
                  <Text style={[styles.boldText,{right:63,fontSize: 13}]}>Date de naissance:</Text>
                  <Text style={[styles.boldText,{right:90,fontSize: 13}]}>Poids(Kg):</Text>
                  <Text style={[styles.boldText,{right:90,fontSize: 13}]}>Taille(cm):</Text>
                  <Text style={[styles.boldText,{right:28,fontSize: 13}]}>Numéro de dossier médical: </Text>
                  <Text style={[styles.boldText,{right:100,fontSize: 13}]}>Parent:</Text>

                </View>
              </View>
            </View>
          </View>
          <View style={styles.container1}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Âge</Text>
              <View style={styles.verticalBorder} />
              <Text style={styles.headerText}>Vaccin</Text>
              <View style={styles.verticalBorder} />
              <Text style={styles.headerText}>État du vaccin</Text>
            </View>
            {data.map((item, index) => (
              <View key={index} style={[styles.row, index === 0 && styles.blueRow]}>
                <Text style={styles.cellText}>{item.age}</Text>
                <View style={styles.verticalBorder} />
                <Text style={styles.cellText}>{item.vaccin}</Text>
                <View style={styles.verticalBorder} />
                <Picker
                  selectedValue={item.etat}
                  style={{ flex: 1 }}
                  onValueChange={(itemValue, itemIndex) => toggleState(index, itemValue)}>
                  <Picker.Item label="Vacciné" value="VACCINÉE" style={{color:"green"}} />
                  <Picker.Item label="Pas Encore" value="Pas Encore" style={{color:"blue"}} />
                </Picker>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity >
        <View style={{ backgroundColor: "#F2F2F2", marginBottom: 20, alignItems: 'center' }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Historique</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Êtes-vous sûr de vouloir changer l'état?</Text>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                disabled={isLoading}
                onPress={() => {
                  confirmStateChange();
                }}
              >
                <Text style={styles.textStyle}>Oui</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#D3D3D3", marginLeft: 10 }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.textStyle}>Non</Text>
              </TouchableHighlight>
            </View>
           
          </View>
         
        </View>
        
      </Modal>
    </SafeAreaView>);
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
    paddingVertical: 5,
    backgroundColor: "#e9f4ff",

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
    backgroundColor: "#e9f4ff"
  },
  cellText: {
    flex: 1,
    textAlign: 'center',
    fontSize:14,
  },
  verticalBorder: {
    width: 1,
    height: '100%',
    backgroundColor: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
