import * as React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, TextInput ,bottom} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Notifadm({navigation}) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1,}}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Notifications</Text>
            </View>
            <View 
                style = {{
                    backgroundColor: "white",
                    paddingTop: 50,
                    paddingBottom: 50,
                    top:-10,
                    height:960,
                    marginHorizontal:300,
                    borderRadius:25,
                    }}>
                    <View style={{
                         borderWidth: 1,
                         backgroundColor: "#97C7F3",
                         padding: 15,
                         borderRadius: 10,
                         borderColor: 'transparent',
                         width:670,
                         height:80,
                         marginLeft:100,
                         marginRight:20,
                        
                    }}>
                        <Text style={styles.hayfa}>
                            {"La request du parent <Abir bessaoud> est en attente"}
                        </Text>
                    </View>
                    <Text style={{
                        marginTop:30,
                        marginLeft:110,
                        marginBottom:20,
                        fontSize:17,
                        fontWeight:550
                    }}>
                        {"Plutôt"}
                    </Text>
                    <View style={{
                         borderWidth: 1,
                         backgroundColor: "#F4999F",
                         padding: 15,
                         borderRadius: 10,
                         borderColor: 'transparent',
                         width:670,
                         height:80,
                         marginLeft:100,
                         marginRight:20
                    }}>
                        <Text style={styles.hayfa}>
                            {"La request du médecin <Amir mansour> est en attente"}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginLeft:120,
        right: 30,
        marginBottom:20
      },
      headerText: {
        top: 35,
        fontSize: 27,
        fontWeight: '550',
        left: 135,
        marginBottom: 50,
      },
      hayfa:{
        fontWeight:"550",
        fontSize:17,
        marginLeft:50,
        marginTop:10
      }
});
