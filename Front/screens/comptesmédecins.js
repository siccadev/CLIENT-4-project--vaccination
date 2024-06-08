import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, Button, FlatList } from 'react-native';

export default function ComptesMédecins() {
  const [users, setUsers] = useState([
    {
      id: 1,
      nom: 'Selmi',
      prenom: 'Ahmed',
      email: 'Selmi.Ahmed3@gmail.com',
      ville: 'Djerba',
      avatar: require('../assets/Avatar.png'),
    },
    {
      id: 2,
      nom: 'Bader',
      prenom: 'Amir',
      email: 'Bader.Amir3@gmail.com',
      ville: 'Djerba',
      avatar: require('../assets/Avatar.png'),
    },
  ]);

  const handleAccept = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleReject = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const UserItem = ({ user }) => {
    return (
      <View style={styles.userItemContainer}>
        <View style={styles.userItem}>
          <Image style={styles.avatar} source={user.avatar} />
          <View style={styles.userData}>
            <Text style={styles.userInfo1}>{user.nom}</Text>
            <Text style={styles.userInfo4}>{user.prenom}</Text>
            <Text style={styles.userInfo2}>{user.email}</Text>
            <Text style={styles.userInfo3}>{user.ville}</Text>
          </View>
          <View style={styles.buttonContainer1}>
            <Button title="Valider" onPress={() => handleAccept(user.id)} color="#28a745" />
          </View>
          <View style={styles.buttonContainer2}>
            <Button title="Refuser" onPress={() => handleReject(user.id)} color="#dc3545" />
          </View>
        </View>
        <View style={styles.separator} />
      </View>
      
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.home} source={require('../assets/coompte.png')} />
          <Text style={styles.headerText}>Compte Médecins</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.labels}>
            <Text style={styles.label1}>Avatar</Text>
            <Text style={styles.label2}>Nom </Text>
            <Text style={styles.label5}>Prénom </Text>
            <Text style={styles.label3}>Email</Text>
            <Text style={styles.label4}>Country</Text>
          </View>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <UserItem user={item} />
            )}
          />
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: 'gray', width: 900, marginTop: 210, left:115, }} />
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
    marginBottom:20,
    bottom:20,
    right:30,
  },
  headerText: {
    top: 35,
    fontSize: 25,
    fontWeight: '550',
    left: 125,
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
    marginHorizontal: 100,
    marginBottom: 10,
    
  },
  userItemContainer: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    backgroundColor: 'white',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    left:32,
  },
  userData: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonContainer1: {
    flexDirection: 'row',
    right:40,
  },
  buttonContainer2: {
    flexDirection: 'row',
    right:35,
  },
  userInfo1: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    left:45,
  },
  userInfo2: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    right:20
  },
  userInfo3: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    right:55,
  },
  userInfo4: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    right:25,
  },
  separator: {
    height: 10,
    backgroundColor: 'white',
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
    fontSize:14,
    right:30,
  },
  label2: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    paddingVertical: 5,
    color: '#333',
    right:90,
    fontSize:14,
  },
  label3: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    paddingVertical: 5,
    color: '#333',
    right:195,
    fontSize:14,
  },
  label4: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    paddingVertical: 5,
    color: '#333',
    right:199,
    fontSize:15,
  },
  label5: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '20%',
    paddingVertical: 5,
    color: '#333',
    right:160,
    fontSize:15,
  },
});