import * as React from 'react';
import {SafeAreaView, ScrollView,StyleSheet, RadioForm, Text, View, TextInput, TouchableOpacity,StatusBar} from 'react-native';
import{ useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

export default function Inscription2({navigation}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [ IsPasswordShown, setIsPasswordShown] = React.useState(false);
    const [isChecked,setIsChecked] = useState(false);
    const handleSelectOption = (option) => {
    setSelectedOption(option);
  };
  const [numDossier, setNumDossier] = useState(''); // État pour stocker le numéro de dossier médical
    const [numDossiersList, setNumDossiersList] = useState([]); // État pour stocker la liste des numéros de dossiers médicaux

    const addMedicalRecord = () => {
        if (numDossier.trim() !== '') {
            setNumDossiersList(prevList => [...prevList, numDossier]); // Ajouter le numéro de dossier à la liste
            setNumDossier(''); // Effacer le champ de saisie
        }
    };
    const removeMedicalRecord = (index) => {
        setNumDossiersList(prevList => prevList.filter((_, i) => i !== index));
    };

    return (
        <SafeAreaView 
        style = {{
            flex: 1,
            
 
        }}>
             <StatusBar  backgroundColor="white" barStyle="dark-content" />
        <ScrollView
            style = {{
                flex: 1,
                backgroundColor:"#9dd0ff",  
            }}>
            <View 
                style = {{
                    backgroundColor: "#9dd0ff",
                    paddingTop: 50,
                    paddingBottom: 50,
                    top:-10,
                    height:800
                    
                }}>
                <Text 
                    style = {{
                        color: "#E937E2",
                        fontSize: 21,
                        fontWeight: "bold",
                        marginBottom: 20,
                        marginLeft: 100,
                        marginTop:5
                    }}>
                    {"S'inscrire Parent"}
                </Text>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderTopLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        placeholder='Nom' 
                        style = {{
                            color: "#000000",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>
                    </TextInput>
                </View>
                <View 
                    style = {{
                        backgroundColor: "#ffffff",
                        borderColor: "#7776c7",
                        borderTopLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderWidth: 1,
                        paddingVertical: 11,
                        paddingHorizontal: 7,
                        marginBottom: 31,
                        marginHorizontal: 32,
                    }}>
                    <TextInput
                        placeholder='Prénom' 
                        style = {{
                            color: "#000000",
                            fontSize: 15,
                            fontWeight: "bold",
                        }}>
                    </TextInput>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={styles.foufa}>Sexe :</Text>
                        {options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        style={{ flexDirection: 'row', alignItems: 'center', marginRight: 60, bottom:25,marginTop:20 }}
                        onPress={() => handleSelectOption(option.value)}
                            >
                        <Text style={{ marginRight: 15}}>{option.label}</Text>
                    <View
                        style={[
                            { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#fff', alignItems: 'center', justifyContent: 'center' },
                            { backgroundColor: selectedOption === option.value ? '#007bff' : '#fff' },
                        ]}
                        >
                        {selectedOption === option.value && <View style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#007bff' }} />}
                    </View>
                    </TouchableOpacity>
                        ))}
                </View>

                <View 
				    style = {{
						backgroundColor: "#ffffff",
						borderColor: "#7776c7",
						borderTopLeftRadius: 15,
						borderBottomRightRadius: 15,
						borderWidth: 1,
						paddingVertical: 11,
						paddingHorizontal: 7,
						marginBottom: 31,
						marginHorizontal: 32,
						}}>
					<TextInput
                        placeholder='Ville' 
						style = {{
							color: "#000000",
							fontSize: 15,
							fontWeight: "bold",
							}}>
							
					</TextInput>
				</View>
                <View 
					style = {{
						backgroundColor: "#ffffff",
						borderColor: "#7776c7",
						borderTopLeftRadius: 15,
						borderBottomRightRadius: 15,
						borderWidth: 1,
						paddingVertical: 11,
						paddingHorizontal: 7,
						marginBottom: 31,
						marginHorizontal: 34,
						}}>
						<TextInput 
                            placeholder='Numéro de téléphone'
                            keyboardType='numeric'
							style = {{
								color: "#000000",
								fontSize: 15,
								fontWeight: "bold",
							}}>
						</TextInput>
				</View>
                <View 
						style = {{
							backgroundColor: "#ffffff",
							borderColor: "#7776c7",
							borderTopLeftRadius: 15,
							borderBottomRightRadius: 15,
							borderWidth: 1,
							paddingVertical: 11,
							paddingHorizontal: 7,
							marginBottom: 31,
							marginHorizontal: 34,
						}}>
						<TextInput 
                            placeholder='E-mail'
                            keyboardType='email-address'
							style = {{
								color: "#000000",
								fontSize: 15,
								fontWeight: "bold",
							}}>
						</TextInput>
				</View>
                <View 
						style = {{
							backgroundColor: "#ffffff",
							borderColor: "#7776c7",
							borderTopLeftRadius: 15,
							borderBottomRightRadius: 15,
							borderWidth: 1,
							paddingVertical: 11,
							paddingHorizontal: 7,
							marginBottom: 31,
							marginHorizontal: 34,
						}}>
						<TextInput
                            placeholder='Mot de passe'
                            secureTextEntry={IsPasswordShown} 
							style = {{
								color: "#000000",
								fontSize: 15,
								fontWeight: "bold",
							}}>
						</TextInput>
                        <TouchableOpacity 
                        onPress={()=>setIsPasswordShown(!IsPasswordShown)}
                        style = {{
                        position: "absolute",
                        right: 15,
                        top: 14,
                        }}>
                        {
                            IsPasswordShown == true ?(
                            <Ionicons name='eye-off' size={24}/> ) : (
                            <Ionicons name='eye' size={24}/>)
                        }
                        </TouchableOpacity>
				</View>
                <View 
					style = {{
						backgroundColor: "#ffffff",
						borderColor: "#7776c7",
						borderTopLeftRadius: 15,
						borderBottomRightRadius: 15,
						borderWidth: 1,
						paddingVertical: 11,
						paddingHorizontal: 7,
						marginBottom: 31,
						marginHorizontal: 34,
						}}>
					<TextInput
                        placeholder='Confirmer le mot de passe'
                        secureTextEntry={IsPasswordShown} 
						style = {{
						color: "#000000",
						fontSize: 15,
						fontWeight: "bold",
							}}>
					</TextInput>
                    <TouchableOpacity 
                        onPress={()=>setIsPasswordShown(!IsPasswordShown)}
                        style = {{
                        position: "absolute",
                        right: 15,
                        top: 14,
                        }}>
                        {
                            IsPasswordShown == true ?(
                            <Ionicons name='eye-off' size={24}/> ) : (
                            <Ionicons name='eye' size={24}/>)
                        }
                    </TouchableOpacity>
			    </View>
                <View 
						style = {{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 36,
							marginHorizontal: 25,
						}}>
						<View 
							style = {{
								flexDirection:"row",
                                marginVertical: 6,
							}}>
						    <Checkbox 
                            style={{marginRight:8, right:-10, top:-20,}}
                            value={isChecked}
                            onValueChange={setIsChecked}
                            color={isChecked ? "#007bff" : undefined}    
						    />
                            <Text style={{right:-10,top:-20,fontSize:13,}}>J'accepte les conditions d'utilisation. </Text>
                        </View>
					</View>
                    <TouchableOpacity onPress={() =>navigation.navigate("Login")}>
					<View 
						style = {{
							width: 200,
							height: 40,
							alignItems: "center",
							backgroundColor: "#2578F5",
							borderRadius: 60,
							paddingVertical: 10,
							marginHorizontal: 80,
                            bottom:30,
                            right:-20,
						}}>
						<Text 
							style = {{
								color: "#fffbfb",
								fontSize: 13,
								fontWeight: "bold",
							}}>
							{"S'inscrire"}
						</Text>
					</View>
                    </TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
      
    );
};
const options = [
    { label: 'Femme', value: 'femme' },
    { label: 'Homme', value: 'homme' },
  ];
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        top:-5,
    
      },
      selectedRadioCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#007bff',
      },
      foufa:{
        fontSize: 15,
        fontWeight: "bold",
        marginRight:70,
        bottom:15,
        left:34,
        

      },
      foufou: {
        marginRight:10,
      },
      container: {
        backgroundColor: "#ffffff",
        borderColor: "#7776c7",
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderWidth: 1,
        paddingVertical: 11,
        paddingHorizontal: 7,
        marginBottom: 31,
        marginHorizontal: 32,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "bold",
        flex: 1,
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    itemText: {
        fontSize: 10,
        fontWeight: "bold",
        marginRight: 10,
    },
    icon: {
        color: "black",
    },
  });



