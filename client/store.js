import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import createReducer from './reducers'


const configureStore = ( preloadedState = {} ) => {

  let store = createStore(
    createReducer(),
    preloadedState,
    compose(
      applyMiddleware(
        promiseMiddleware()
      )
    )
  );
  store.asyncReducers = {};
  return store;
};

export default configureStore()
