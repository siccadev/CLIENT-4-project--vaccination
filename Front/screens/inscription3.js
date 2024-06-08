import * as React from 'react';
import {SafeAreaView, ScrollView,Image ,StyleSheet, Text, View, TextInput, TouchableOpacity,Button,StatusBar} from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import  * as ImagePicker  from 'expo-image-picker';




export default function Inscription3({navigation}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [ IsPasswordShown, setIsPasswordShown] = React.useState(false);
    const [isChecked,setIsChecked] = useState(false);
    const handleSelectOption = (option) => {
      setSelectedOption(option)};
    const [hasGalleryPermission, setHasGallerPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
      (async () =>  { 
        const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGallerPermission(galleryStatus.status === 'granted');
      })();
    },[]);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
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
                    height:980,
                    
                }}>
                <Text 
                    style = {{
                        color: "#E937E2",
                        fontSize: 21,
                        fontWeight: "bold",
                        marginBottom: 20,
                        marginLeft: 100,
                        marginTop:5,
                    }}>
                    {"S'inscrire Médecin"}
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
                  <View style={styles.container}>
                    <Text style={styles.foufa}>Sexe :</Text>
                      {options.map((option) => (
                      <TouchableOpacity
                        key={option.value}
                        style={styles.optionContainer}
                        onPress={() => handleSelectOption(option.value)}
                        >
                        <Text style={styles.foufou}>{option.label}</Text>
                        <View
                        style={[
                          styles.radioCircle,
                          {backgroundColor: selectedOption === option.value ? '#007bff' : '#fff' },
                            ]}
                            >
                          {selectedOption === option.value && <View style={styles.selectedRadioCircle} />}
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
						marginHorizontal: 32,
						}}>
						<TextInput
              placeholder='Spécialité'
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
							alignItems: "center",
							backgroundColor: "#ffffff",
							borderColor: "#ffffff",
							borderTopLeftRadius: 15,
							borderBottomRightRadius: 15,
							borderWidth: 1,
							paddingVertical: 5,
							paddingHorizontal: 7,
							marginBottom: 29,
							marginHorizontal: 36,
						    }}>
              <Text 
							style = {{
								color: "#000000",
								fontSize: 15,
								fontWeight: "bold",
								marginRight: 4,
								flex: 1,
                left:-1,
							}}>
							{"Sélectionné Votre Diplôme"}
						</Text>
            <TouchableOpacity onPress={pickImage} style={styles.iconContainer}>
              <View style={styles.iconWrapper}>
                <Ionicons name="folder-open" size={60} style={styles.folderIcon} />
                {image && <Image source={{ uri: image }} style={styles.image} />}
              </View>
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
      radioCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 38,
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
        left: 33,
        marginRight:50,
        bottom:5

      },
      iconContainer: {
        position: 'relative',
      },
      iconWrapper: {
        position: 'relative',
      },
      folderIcon: {
        position: 'relative',
        top: -4,
        left: -4,
        width:40,
        height:40,
      },
      image: {
        width: 30,
        height: 10,
        position: 'absolute',
        resizeMode: 'cover',
        opacity:0.8,
        left:3,
        top:10,
      },
      foufou:{
        marginRight:10,
      },
  });




