import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import filter from './reducers/filters';
import pizzas from './reducers/pizzas';
import cart from './reducers/cart';

const rootReducer = combineReducers({
  filter,
  pizzas,
  cart,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
