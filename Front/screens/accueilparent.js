import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView, SafeAreaView ,TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from './header';
import { Ionicons } from '@expo/vector-icons';



export default function Accueilparent({navigation}) {
  const [searchText, setSearchText] = React.useState('');

    const handleSearchChange = (text) => {
        setSearchText(text);
    };
  return (
    <SafeAreaView  style={{
      flex: 1,
      }}>
      <Header navigation={navigation} />
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
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 30,
              marginBottom: 30,
              textDecorationLine: 'underline',
            }}>
            {"Accueil"}
          </Text>
          <View style={styles.searchContainer}>
                <Ionicons name="search" size={24} color="black" style={styles.icon} />
                  <TextInput
                      style={styles.input}
                      placeholder="Rechercher un dossier médical"
                      onChangeText={handleSearchChange}
                      value={searchText}
                    />
          </View>
          <View style={{flexDirection:"row"}}>
          <View
            style={{
              backgroundColor: "#FBB8D9",
              flex: 1,
              borderRadius: 10,
              borderColor: 'transparent',
              flexDirection: "column",
              marginHorizontal:10,
              height: 200,
              marginTop: 50,
            }}>
              <Image source={require('../assets/fille.png')} style={{ width: 60, height: 60, left:55, marginBottom: 20, marginTop: 40,borderRadius:50 }} />
              
          </View>
          <View
            style={{
              backgroundColor: "#97C7F3",
              flex: 1,
              borderRadius: 10,
              borderColor: 'transparent',
              marginLeft: 10,
              marginHorizontal:10,
              height: 200,
              marginTop: 50,
              
            }}>
              <Image source={require('../assets/boy.png')} style={{ width: 60, height: 60, left: 57, marginBottom: 20, marginTop: 40,borderRadius:50 }} />
              
           </View>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    fontSize: 10,
},
});