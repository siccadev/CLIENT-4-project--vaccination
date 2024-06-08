import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Login({navigation}) {
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
            backgroundColor: "#9dd0ff",
            
        }}>
        <View 
            style = {{
                paddingTop: 350,
                paddingBottom: 95,
                height:800
               
            }}>
            <View 
                style = {{
                    backgroundColor: "#ffffff",
                    borderRadius: 60,
                    paddingVertical: 14,
                    paddingHorizontal: 27,
                    marginBottom: 16,
                    marginHorizontal: 33,
                    opacity: 0.7,
                }}>
                <TextInput
                    placeholder='E-mail'
                    style = {{
                        color: "#000000",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}>
                </TextInput>
            </View>
            <View 
                style = {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    borderRadius: 60,
                    paddingVertical: 13,
                    paddingLeft: 27,
                    marginBottom: 16,
                    marginHorizontal: 33,
                    opacity: 0.7,
                }}>
                <TextInput 
                    placeholder='Mot de passe'
                    secureTextEntry={IsPasswordShown}
                    style = {{
                        color: "#000000",
                        fontSize: 15,
                        fontWeight: "bold",
                    }}/>
                <TouchableOpacity 
                    onPress={()=>setIsPasswordShown(!IsPasswordShown)}
                    style = {{
                        position: "absolute",
                        right: 15,
                    }}>
                        {
                            IsPasswordShown == true ?(
                            <Ionicons name='eye-off' size={24}/> ) : (
                            <Ionicons name='eye' size={24}/>)
                        }
                </TouchableOpacity>
                
            </View>
            <View>
                <TouchableOpacity  style = {{
                    alignItems: "center",
                    backgroundColor: "#2578F5",
                    borderRadius: 60,
                    paddingVertical: 10,
                    marginBottom: 31,
                    marginHorizontal: 100,
                    
                }}>
                    <Text 
                        style = {{
                        color: "#ffffff",
                        fontSize: 15,
                        fontWeight: "bold",
                        
                        }}>
                    {" Se connecter"}
                    </Text>
                </TouchableOpacity>
            </View>
            <View 
                style = {{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 94,
                    marginHorizontal: 50,
                    marginTop:-15,
                    
                }}>
                <Text 
                    style = {{
                        color: "#0d49ae",
                        fontSize: 14,
                        fontWeight: "bold",
                    }}>
                    {"Vous n'avez pas de compte ?"}
                </Text>
                <TouchableOpacity>
                    <Text 
                        onPress={()=> navigation.navigate("Inscription1")}
                        style = {{
                            color: "#E937E2",
                            fontSize: 14,
                            fontWeight: "bold",
                            }}>
                        {"S'inscrire"}
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("Initmod1_2")}>
            <Text 
                style = {{
                    color: "#E937E2",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginLeft: 110,
                    marginTop: 50,
                }}>
                {"Mot de passe oublié ?"}
            </Text>
            </TouchableOpacity>
            <Image
						source ={require('../assets/colors.png')} 
						style = {{
                            
							position: "absolute",
							top: -5,
							right: -5,
                            left:-3,
							width: 420,
							height: 347,
                            opacity: 0.9,
						}}
					/>
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
    flexDirection:'column',
  },


});
