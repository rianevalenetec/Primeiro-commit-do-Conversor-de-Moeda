import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { getExchangeRates } from '../services/api';

const HomeScreen = ({ route }) => {
  const { userName } = route.params;
  const [amountBRL, setAmountBRL] = useState('');
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);
  const [arsRate, setArsRate] = useState(null);
  const [gbpRate, setGbpRate] = useState(null);
  const [jpyRate, setJpyRate] = useState(null);
  const [audRate, setAudRate] = useState(null);
  const [convertedUSD, setConvertedUSD] = useState(0);
  const [convertedEUR, setConvertedEUR] = useState(0);
  const [convertedARS, setConvertedARS] = useState(0);
  const [convertedGBP, setConvertedGBP] = useState(0);
  const [convertedJPY, setConvertedJPY] = useState(0);
  const [convertedAUD, setConvertedAUD] = useState(0);
  const [easterEggMessage, setEasterEggMessage] = useState('');
  const [theme, setTheme] = useState('dark'); // Tema dark ou claro

  useEffect(() => {
    const fetchRates = async () => {
      const rates = await getExchangeRates();
      setUsdRate(rates.USD);
      setEurRate(rates.EUR);
      setArsRate(rates.ARS);
      setGbpRate(rates.GBP);
      setJpyRate(rates.JPY);
      setAudRate(rates.AUD);
    };
    fetchRates();
  }, []);

  const handleConvert = () => {
    setConvertedUSD((amountBRL * usdRate).toFixed(2));
    setConvertedEUR((amountBRL * eurRate).toFixed(2));
    setConvertedARS((amountBRL * arsRate).toFixed(2));
    setConvertedGBP((amountBRL * gbpRate).toFixed(2));
    setConvertedJPY((amountBRL * jpyRate).toFixed(2));
    setConvertedAUD((amountBRL * audRate).toFixed(2));

    // Gerar mensagem aleatória de Easter egg
    const messages = [
      "A moeda tem duas faces, como você já sabe.",
      "Escolha sabiamente, meu amigo...",
      "O destino está nas suas mãos... ou nas moedas!",
      "A dualidade da vida está aqui... Escolha o lado que deseja.",
      "A sorte está ao seu lado... ou não.",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setEasterEggMessage(randomMessage);

    // Trocar tema aleatoriamente
    if (Math.random() > 0.5) {
      setTheme(theme === 'dark' ? 'purple' : 'dark');  // Mudança para roxo escuro
    }
  };

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkTheme : theme === 'purple' ? styles.purpleTheme : styles.lightTheme]}>
      <Text style={styles.title}>Bem-vindo, {userName}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em BRL"
        keyboardType="numeric"
        value={amountBRL}
        onChangeText={setAmountBRL}
      />
      <Button title="Converter" onPress={handleConvert} />
      <Text style={styles.text}>Valor em USD: ${convertedUSD}</Text>
      <Text style={styles.text}>Valor em EUR: €{convertedEUR}</Text>
      <Text style={styles.text}>Valor em ARS: ${convertedARS} ARS</Text>
      <Text style={styles.text}>Valor em GBP: £{convertedGBP}</Text>
      <Text style={styles.text}>Valor em JPY: ¥{convertedJPY}</Text>
      <Text style={styles.text}>Valor em AUD: ${convertedAUD} AUD</Text>

      {easterEggMessage && <Text style={styles.easterEggText}>{easterEggMessage}</Text>}

      {/* Imagem do Duas Caras */}
      <Image
        source={require('../../assets/23.png')}  // Caminho para a imagem na pasta assets
        style={styles.duascarasImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkTheme: {
    backgroundColor: '#1c1c1c',
  },
  purpleTheme: {
    backgroundColor: '#5e2a7a',  // Roxo escuro
  },
  lightTheme: {
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Georgia',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#8b8b8b',
    borderRadius: 5,
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#444',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 10,
  },
  easterEggText: {
    color: 'gold',
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: 20,
    textAlign: 'center',
  },
  duascarasImage: {
    width: 150,  // Ajuste o tamanho conforme necessário
    height: 150,
    marginTop: 30,
  },
});

export default HomeScreen;



