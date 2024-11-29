import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');

  const handleLogin = () => {
    if (userName.trim()) {
      navigation.replace('Home', { userName });
    } else {
      alert('Por favor, insira seu nome.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/duascaras.png')} style={styles.image} />
      <Text style={styles.title}>Bem-vindo ao Conversor de Moedas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={userName}
        onChangeText={setUserName}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c2c2c',  // Fundo escuro
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontFamily: 'Georgia', // Fonte mais dramática
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#8b8b8b',  // Cor prata
    borderRadius: 5,
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#444',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  }
});

export default LoginScreen;
