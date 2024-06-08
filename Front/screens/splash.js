import * as React from 'react';
import { StyleSheet, Text, View,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { StatusBar } from 'react-native';


export default function Splash({navigation}) {

    setTimeout(() => {
      navigation.navigate('Welcome')
    },3000)


  return (
    <View style={styles.container}> 
    <StatusBar  backgroundColor="#FEE0FF" barStyle="dark-content" hidden={false}/>
      <LinearGradient
            start={{x:0.5, y:-3.061617296899042e-17}}
			      end={{x:0.5, y:0.9999999999999999}}
			      colors={["#FEE0FF", "#FEE0FF"]}
            style={styles.background}
      />
      <Image source={require('../assets/Logo.png')}
            style={styles.Login} />
         
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 820,
  },
  Login: {
    width:250,
    height: 200,
    marginTop: -80,
   
   
  },
});
