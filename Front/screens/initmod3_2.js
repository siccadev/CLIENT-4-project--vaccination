import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

const Initmod3_2 = ({navigation}) => {
  const [verificationCode, setVerificationCode] = useState('');
  
  const [timer, setTimer] = useState(60); 
  const [timerActive, setTimerActive] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerActive && timer > 0) {
      timerRef.current = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
      clearTimeout(timerRef.current);
    }

    return () => clearTimeout(timerRef.current);
  }, [timerActive, timer]);

  const handleVerificationCodeChange = (value, index) => {
    if (value.length > 0) {
      const newCode = value.charAt(value.length - 1);
      const updatedCode = verificationCode.split('');
      updatedCode[index] = newCode;
      setVerificationCode(updatedCode.join(''));
      if (index < 3) {
        refs[index + 1].focus();
      }
    } else {
      const updatedCode = verificationCode.split('');
      updatedCode[index] = '';
      setVerificationCode(updatedCode.join(''));
      if (index > 0) {
        refs[index - 1].focus();
      }
    }
  };

  const handleResendCode = () => {
    setTimer(60); 
    setTimerActive(true); 
  };

  const refs = [];
  const createRefs = (index) => (input) => {
    refs[index] = input;
  };
  

  return (
    <SafeAreaView 
    style = {{
        flex: 1,
        
    }}>
        <StatusBar  backgroundColor="white" barStyle="dark-content" />
    <View style={styles.container}>
      <Text style={styles.title}>Email Verification</Text>
      <Text style={styles.instructions}>
        Écrivez le code que vous allez recevoir sur votre adresse
      </Text>
      <View style={styles.codeContainer}>
        {[0, 1, 2, 3].map((index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleVerificationCodeChange(value, index)}
            ref={createRefs(index)}
          />
        ))}
      </View>
      <TouchableOpacity
        style={[styles.resendButton, timerActive && styles.resendButtonDisabled]}
        disabled={timerActive}
        onPress={handleResendCode}
      >
        <Text style={styles.resendButtonText}>
          {timerActive ? `Renvoyer en ${timer} secondes` : 'Renvoyer le code'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.suivButton}  onPress={() =>navigation.navigate("Initmod4")}>
        <Text style={styles.suivButtonText}>Suivant</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEE0FF',
    
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#0D45A1',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 80,
  },
  instructions: {
    textAlign: 'center',
    color: '#0D45A1',
    marginBottom: 30,
    marginTop: 40,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  resendButton: {
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginBottom: 45,
    borderRadius: 5,
    backgroundColor: '#0D45A1',
    opacity: 0.8,
  },
  resendButtonDisabled: {
    backgroundColor: '#7AA6EF',
    opacity: 0.5,
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 10,
  },
  suivButton: {
    paddingVertical: 10,
    paddingHorizontal: 45,
    marginBottom: 1,
    borderRadius: 5,
    backgroundColor: '#ED87EF',
    borderRadius: 40,
    marginBottom: 200,
    opacity: 0.8,
  },
  suivButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Initmod3_2;