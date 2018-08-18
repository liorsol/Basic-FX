import { Action } from './'
import Api from '../api/finance'


const initialState = {
  process: false,
  financeUnits: [],
  currenciesRate: {}
}

export default function reducer(state = initialState, action = {}) {
  console.log("reducer", action)
  switch (action.type) {
    case Action.FINANCE_UNITS_FETCH+"_FULFILLED": {
        if (!action.error) {
          const { payload: { data: { data: financeUnits } } } = action;
          return Object.assign({}, state, { financeUnits });
        }
      }
    case Action.CURRENCIES_RATE_FETCH+"_FULFILLED": {
      if (!action.error) {
        const { payload: { data: { data: currenciesRate } } } = action;
        return Object.assign({}, state, { currenciesRate });
      }
    }
    default:
      return state;
  }
}

export const getFinancialUnits = () => ({
  type: Action.FINANCE_UNITS_FETCH,
  payload: Api.getFinancialUnits()
});

export const getCurrenciesRates = () => ({
  type: Action.CURRENCIES_RATE_FETCH,
  payload: Api.getCurrenciesRate()
});