import { combineReducers } from 'redux'
import finance from './finance'

export let Action = {};
Action.FINANCE_UNITS_FETCH = 'FINANCE_UNITS_FETCH';
Action.CURRENCIES_RATE_FETCH = 'CURRENCIES_RATE_FETCH';

function defaultReducer(state = { process: false }, action = {}) {
  // For ajax calls
  if (action.type.endsWith("_PENDING")) {
    return Object.assign({}, state, { process: true });
  }
  return state;
}

export default function createReducer( asyncReducers ) {
    return combineReducers({
      finance,
      defaultReducer,
        ...asyncReducers
    });
}

//
