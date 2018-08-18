import axios from 'axios'

const finance = {
  getFinancialUnits: () => axios.get('/calcFinancialUnits'),
  getCurrenciesRate: () => axios.get('/currencies')
};

export default finance;

