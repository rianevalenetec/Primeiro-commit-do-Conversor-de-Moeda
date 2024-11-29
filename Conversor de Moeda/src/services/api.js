import axios from 'axios';

export const getExchangeRates = async () => {
  try {
    const response = await axios.get('https://economia.awesomeapi.com.br/json/last/BRL-USD,BRL-EUR,BRL-ARS,BRL-GBP,BRL-JPY,BRL-AUD');
    return {
      USD: parseFloat(response.data.BRLUSD.bid),
      EUR: parseFloat(response.data.BRLEUR.bid),
      ARS: parseFloat(response.data.BRLARS.bid),
      GBP: parseFloat(response.data.BRLGBP.bid),
      JPY: parseFloat(response.data.BRLJPY.bid),
      AUD: parseFloat(response.data.BRLAUD.bid),
    };
  } catch (error) {
    console.error('Erro ao buscar cotações:', error);
    return { USD: 0, EUR: 0, ARS: 0, GBP: 0, JPY: 0, AUD: 0 };
  }
};

