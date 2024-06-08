import * as React from 'react';
import {SafeAreaView, ScrollView,Image ,StyleSheet, Text, View, TextInput, TouchableOpacity,Button} from 'react-native';
import{ useState } from 'react';
import Checkbox from 'expo-checkbox';

export default function Modifvacc() {
    const [isChecked2Mois, setIsChecked2Mois] = useState(false);
    const [isChecked4Mois, setIsChecked4Mois] = useState(false);
    const [isChecked6Mois, setIsChecked6Mois] = useState(false);
    const [isChecked11Mois, setIsChecked11Mois] = useState(false);
    const [isChecked12Mois, setIsChecked12Mois] = useState(false);
    const [isChecked1ans, setIsChecked1ans] = useState(false);
    const handleAjouterPress = () => {
        console.log('Ajout effectué avec succès!');
    };
    return (
        <SafeAreaView 
        style = {{
            flex: 1, 
        }}>
        <ScrollView
            style = {{
                flex: 1,
            }}>
            <View style={styles.header}>
                <Image style={styles.home} source={require('../assets/vaccinn.png')} />
                <Text style={styles.headerText}>Ajouter vaccin</Text>
            </View>
            <View 
                style = {{
                    backgroundColor: "white",
                    paddingTop: 50,
                    paddingBottom: 50,
                    top:-10,
                    height:960,
                    marginHorizontal:300,
                    borderRadius:25    
                }}>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput 
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput 
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View 
					style = {{
						flexDirection:"row",
                        marginVertical: 4,
							}}>
                    <Text style={{marginLeft:60,fontSize:18,color:"black",fontWeight:"bold",bottom:3}}>Ages : </Text>
                    <View style={{flexDirection:"row",}}>
					<Checkbox 
                        style={{ marginLeft:40,marginTop:4}}
                        value={isChecked2Mois}
                        onValueChange={setIsChecked2Mois}
                        color={isChecked2Mois ? "#007bff" : undefined}   
						/>
                    <Text style={{ marginLeft:5,top:1,fontWeight:"500"}}>2 mois </Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
					<Checkbox 
                        style={{ marginLeft:40,marginTop:4}}
                        value={isChecked4Mois}
                        onValueChange={setIsChecked4Mois}
                        color={isChecked4Mois ? "#007bff" : undefined}  
						/>
                    <Text style={{ marginLeft:5,top:1,fontWeight:"500"}}>4 mois </Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
					<Checkbox 
                        style={{ marginLeft:40,marginTop:4}}
                        value={isChecked6Mois}
                        onValueChange={setIsChecked6Mois}
                        color={isChecked6Mois ? "#007bff" : undefined}  
						/>
                    <Text style={{ marginLeft:5,top:1,fontWeight:"500"}}>6 mois </Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
					<Checkbox 
                        style={{ marginLeft:40,marginTop:4}}
                        value={isChecked11Mois}
                        onValueChange={setIsChecked11Mois}
                        color={isChecked11Mois ? "#007bff" : undefined}  
						/>
                    <Text style={{ marginLeft:5,top:1,fontWeight:"500"}}>11 mois </Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
					<Checkbox 
                        style={{ marginLeft:40,marginTop:4}}
                        value={isChecked12Mois}
                        onValueChange={setIsChecked12Mois}
                        color={isChecked12Mois ? "#007bff" : undefined}    
						/>
                    <Text style={{ marginLeft:5,top:1,fontWeight:"500"}}>12 mois </Text>
                    </View>
                    <View style={{flexDirection:"row",}}>
					<Checkbox 
                        style={{ marginLeft:40,marginTop:4}}
                        value={isChecked1ans}
                        onValueChange={setIsChecked1ans}
                        color={isChecked1ans ? "#007bff" : undefined}    
						/>
                    <Text style={{ marginLeft:5,top:1,fontWeight:"500"}}>1 ans </Text>
                    </View>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderRadius:10,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginHorizontal: 32,
                        marginTop:25
                    }}>
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        style = {{
                            color: "black",
                            fontSize: 15,
                            fontWeight: "bold",
                            opacity:0.8,
                            outlineStyle: 'none'
                        }}>
                    </TextInput>
                </View>
                <View>
                <TouchableOpacity  style = {{
                    alignItems: "center",
                    backgroundColor: "#2578F5",
                    borderRadius: 10,
                    paddingVertical: 10,
                    marginHorizontal: 300,
                    marginTop:20,
                    
                }}
                onPress={handleAjouterPress}
                >
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
			</View>
			</ScrollView>
		</SafeAreaView>
      
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginLeft:120,
        right: 30,
      },
      headerText: {
        top: 35,
        fontSize: 27,
        fontWeight: '550',
        left: 135,
        marginBottom: 50,
      },
      home: {
        height: 60,
        width: 60,
        top: 20,
        left: 120,
        marginBottom: 30,
        marginTop:10,
      },
  });




