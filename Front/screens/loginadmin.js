import * as React from 'react';
import { StyleSheet, ScrollView, Text, View,TextInput , TouchableOpacity,Image,SafeAreaView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';




export default function Loginadmin({navigation}) {
    const [ IsPasswordShown, setIsPasswordShown] = React.useState(false);
  return (
    <SafeAreaView 
    style = {{
        flex: 1,
        
    }}>
    <ScrollView  
        style = {{
          flex: 1,
        }}>
          <View>
          <LinearGradient 
						start={{x:0.5, y:-3.0616171314629196e-17}}
						end={{x:0.5, y:0.9999999999999999}}
						colors={["#97c7f3CF", "#ff71cd"]}
						style = {{
            width:"100%",
            height:730
						}}>
          <View style={{
            borderColor: 'white',
            borderWidth: 5,
            width:500,
            height:500,
            position:'absolute',
            left:500,
            top:85,
            backgroundColor:"#fee0ff",
            borderRadius:50,
            opacity:0.5,
          }}>
          </View>
        <View 
            style = {{ 
              paddingTop: 350,
              paddingBottom: 95,
              left:565,
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
                    width:295,
                    
                }}>
                <TextInput
                    placeholder='E-mail'
                    style = {{
                        color: "#000000",
                        fontSize: 15,
                        fontWeight: "bold",
                        opacity:0.7
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
                    width:295,
                }}>
                <TextInput 
                    placeholder='Mot de passe'
                    secureTextEntry={IsPasswordShown}
                    style = {{
                        color: "#000000",
                        fontSize: 15,
                        fontWeight: "bold",
                        opacity:0.7
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
                <TouchableOpacity style = {{
                    alignItems: "center",
                    backgroundColor: "#2578F5",
                    borderRadius: 60,
                    paddingVertical: 10,
                    marginBottom: 31,
                    marginHorizontal: 100,
                    width:190,
                    right:16,
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
            <Image
						source ={require('../assets/Logo.png')} 
						style = {{           
							position: "absolute",
							top:110,
              left:60,
							width: 225,
							height: 180,
						}}
					/>
        </View>
        </LinearGradient>
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
