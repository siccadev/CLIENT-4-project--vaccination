import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,} from 'react-native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Initmod1_2({navigation}) {
    const [ IsPasswordShown, setIsPasswordShown] = React.useState(false);
  return (
    <SafeAreaView 
    style = {{
        flex: 1,
        
    }}>
        <StatusBar  backgroundColor="white" barStyle="dark-content" />
    <ScrollView  
        style = {{
            flex: 1,
            backgroundColor: "#ffffff",
            borderRadius: 20,
            pointerEvents: "none",
            
        }}>
        <View 
            style = {{
                backgroundColor: "#FEE0FF",
                paddingTop: 200,
                paddingBottom: 400,
               
            }}>
            <Text 
                style = {{
                    color: "#0d49ae",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 30,
                    marginTop: 10,
                    marginBottom: 50,
                }}>
                {"Veuillez entrer votre adress e-mail pour rechercher à votre compte:"}
            </Text>
            <View 
                style = {{
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    paddingVertical: 14,
                    paddingHorizontal: 27,
                    marginBottom: 50,
                    marginHorizontal: 33,
                    marginTop: 50,
                    opacity: 0.7,
                }}>
                <TextInput
                    placeholder='exemple1@gmail.com'
                    style = {{
                        color: "#000000",
                        fontSize: 14,
                        fontWeight: "bold",
                    }}>
                </TextInput>
            </View>
            <View>
                <TouchableOpacity  style = {{
                    alignItems: "center",
                    backgroundColor: "#ED87EF",
                    borderRadius: 40,
                    paddingVertical: 10,
                    marginBottom: 31,
                    marginTop: 40,
                    marginHorizontal: 100,
                    opacity: 0.8,
                    
                }}
                onPress={() =>navigation.navigate("Initmod3_2")}
                >
                    <Text 
                        style = {{
                        color: "#FFFFFF",
                        fontSize: 15,
                        fontWeight: "bold",
                        
                        }}>
                    {"Suivant"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
</SafeAreaView>

);
};
 

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },


});