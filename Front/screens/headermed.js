import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';




export default function Headermed({navigation}) {
  return (
    <View style={headerStyles.container}>
      <StatusBar backgroundColor="#FEE0FF" barStyle="dark-content" hidden={false} />
      <Text style={headerStyles.title}></Text>
      <View style={{ flexDirection: "row" }}>
        <Image source={require('../assets/logoo.png')} style={{ height: 45, width: 50, right: 120, bottom: 3 }} />
        <TouchableOpacity onPress={()=> navigation.navigate("Profilmed")}>
          <Image
            source={require('../assets/avatara.jpg')}
            style={{
              height: 45,
              width: 45,
              borderRadius: 65,
              bottom: 3,
              left: 135
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate("Notification_med")} >
        <FontAwesome name="bell" size={25} color={"black"} style={{top:7, left:7}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const headerStyles = StyleSheet.create({
    container: {
      width: '100%',
      height: 75,
      backgroundColor: '#FEE0FF',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: "#CACAD2",
      bottom:20
    },
    title: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
  });