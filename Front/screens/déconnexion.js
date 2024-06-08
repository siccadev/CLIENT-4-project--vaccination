import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './header';

export default function Déconnexion({ navigation }) {
    const handleLogout = () => {
        // Mettez ici le code pour déconnecter l'utilisateur
        // Par exemple, vous pouvez effacer les données de session ou faire d'autres opérations de déconnexion

        // Naviguer vers l'écran de connexion
        navigation.navigate('Login'); // Assurez-vous d'avoir un écran de connexion nommé 'Login' dans votre StackNavigator
    };

    return (
        <View>
            <Header navigation={navigation} />
            <View>
                <Text style={styles.title}>Déconnexion</Text>
                <Text style={styles.message}>Êtes-vous sûr de vouloir vous déconnecter ?</Text>
                <TouchableOpacity onPress={handleLogout}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Déconnexion</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F2F2F2',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 150,
        marginLeft: 107,

    },
    message: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        width: 126,
        height: 45,
        alignItems: "center",
        backgroundColor: "#2578F5",
        borderRadius: 20,
        paddingVertical: 11,
        marginHorizontal: 130,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
});
