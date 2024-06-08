import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image,TouchableOpacity } from "react-native";



export default function Inscription1({navigation}) {
    return (
        <SafeAreaView 
			style = {{
				flex: 1,
			}}>
			<ScrollView  
				style = {{
					flex: 1,
					backgroundColor: "#ffffff",
					borderRadius: 20,
					pointerEvents: "none",
					
				}}>
				<View 
					style = {{
						backgroundColor: "#9dd0ff",
						paddingTop: 25,
						paddingBottom: 37,
						height:850,
					}}>
					<Text 
						style = {{
							color: "#E937E2",
							fontSize: 24,
							fontWeight: "bold",
							marginBottom: 46,
							marginLeft: 60,
							top:20,
						}}>
						{"S'inscrire en tant que  "}
					</Text>
					<View 
						style = {{
							marginBottom: 34,
							marginHorizontal: 53,
						}}>
						<Image
							source={require('../assets/famille.png')}
							style = {{
								height: 254,
								width:250,
								left:15,
							}}
						/>
						<View>
							<TouchableOpacity
								style = {{
									position: "absolute",
									bottom: -34,
									right: -39,
									width: 360,
									height: 47,
									backgroundColor: "#2578F5",
									paddingHorizontal: 138,
									}}
									onPress={()=>navigation.navigate("Inscription2")} 
									>
								<Text
								style = {{
									color: "#fffbfb",
									fontSize: 20,
									marginTop: 5,
								}}>
								{" Parent"}
								</Text>
							</TouchableOpacity>
						</View>
						
					</View>
					<View 
						style = {{
							top: -2,
							marginBottom: 65,
							borderBottomWidth:3,
							borderBottomColor:"#eb60dd",
							width:360,
							left:19,
						}}>
					</View>
					<View 
						style = {{
							marginHorizontal: 53,
						}}>
						<Image
							 source={require('../assets/médecin.png')}
							style = {{
								height: 254,
								width:250,
								left:15,
							}}
						/>
						
						<View>
							<TouchableOpacity
								style = {{
									position: "absolute",
									bottom: -34,
									right: -39,
									width: 360,
									height: 50,
									backgroundColor: "#2578F5",
									paddingHorizontal: 138,
								
									}}
								onPress={()=>navigation.navigate("Inscription3")} 
								>
								<Text 
									style = {{
										color: "#fffbfb",
										fontSize: 18.64,
										marginTop: 7,
									
									}}>
									{"Médecin"}
								</Text>
							</TouchableOpacity>
						</View>
						
					</View>
				</View>
					<View 
						style = {{
							height: 1,
							marginTop: -20,
							top:-79,
							borderBottomWidth:3,
							borderBottomColor:"#eb60dd",
							width:360,
							left:19,
						}}>
					</View>
			</ScrollView>
		</SafeAreaView>
		
    );
};