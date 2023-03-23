import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';

// const rootReducer = combineReducers({
//   filtersReducer,
//   pizzasReducer,
// });

const store = configureStore({
  reducer: {
    filter: filtersReducer,
    pizzas: pizzasReducer,
  },
});

window.store = store;

export default store;
