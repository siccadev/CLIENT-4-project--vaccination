import * as React from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';
import { StatusBar } from 'react-native';


export default function Welcome(navigation) {
return (
    <SafeAreaView 
			style = {{
				flex: 1,
			}}>
                <StatusBar backgroundColor="#97c7f3CF"/>
                
			<ScrollView
                style = {{
						flexDirection: "row",
                        pointerEvents: "none",
                }}>
				<View>
					<LinearGradient 
						start={{x:0.5, y:-3.0616171314629196e-17}}
						end={{x:0.5, y:0.9999999999999999}}
						colors={["#97c7f3CF", "#fee0ff"]}
						style = {{
                            
							width: 400,
                            height: 820,
                            left: 0,
                            right: 0,
                            top: 0,  
						}}>
                    
					    <Image
						    source ={require('../assets/balons.png')}
							style = {{
							position: "absolute",
							top: -135,
							right: -1,
                            left:-1,
							width: 420,
							height: '100%',
                            opacity: 0.9,
								}}
					    />
                        <Text 
						    style = {{
                            position: "absolute",
							color: "#0d49ae",
							fontSize: 30,
							fontWeight: "bold",
							textAlign: "center",
                            top: 450,
							marginHorizontal: 30,
							
						}}>
						{"Bienvenue à \n    “TFA9ADNI”"}
					    </Text>
                    
                    <View>
                        <TouchableOpacity
                        style = {{
                            backgroundColor: "#ED87EF",
                            borderRadius: 60,
                            paddingVertical: 14,
                            paddingHorizontal: 27,
                            marginBottom: 16,
                            marginHorizontal: 90,
                            opacity: 0.8,
                            top: 680,
                            }}
                            onPress={()=> navigation.navigation.navigate("Login")}
                            >   
                            <Text
                                style = {{
                                color: "#ffffff",
                                fontSize: 19,
                                fontWeight: "bold",
                                textAlign:"center"
                                }}>
                                {"Commencer"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                 </LinearGradient>
            </View>
    </ScrollView>
    </SafeAreaView>
  );
};

