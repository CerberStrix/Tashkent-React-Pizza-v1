import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';

const rootReducer = combineReducers({
  filter: filtersReducer,
  pizzas: pizzasReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
