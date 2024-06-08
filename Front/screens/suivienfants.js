import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,SafeAreaView,ScrollView,Image} from 'react-native';
import Header from './header';

export default function Suivienfants({navigation}) {
  return (
    
    <SafeAreaView style={styles.container}>
       <Header navigation={navigation}/>
      <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#F2F2F2",

                }}>
                <View
                    style={{
                        backgroundColor: "#F2F2F2",
                        paddingTop:9,
                        paddingBottom:486
                      }}>
                    <Text
                        style={{
                          color: "#000000",
                          fontSize: 20,
                          fontWeight: "bold",
                          marginRight:120,
                          textDecorationLine: 'underline',
                         }}>
                        {"Suivis enfants"}
                    </Text>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginBottom:10,
                        marginHorizontal:45,
                        marginTop:55,
                       
                    }}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Consult_doss_parent")}>
                        <Image 
                         source={require('../assets/folder.png')}
                         style={{width:64,height:64,}}
                         />
                         </TouchableOpacity>
                         <TouchableOpacity>
                         <Image 
                         source={require('../assets/folder.png')}
                         style={{width:64,height:64,marginLeft:100,}}
                         />
                         </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginHorizontal:54,

                    }}>
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
    backgroundColor: '#F2F2F2',
  },

});
