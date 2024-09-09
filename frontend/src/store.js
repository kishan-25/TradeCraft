import { configureStore } from '@reduxjs/toolkit'; // Correct import for configureStore
import { combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducers } from './reducers/ProductReducers';

const reducers = combineReducers({
    productList: productListReducers,
});

const initialState = {};
const middleware = [thunk];

// Using configureStore correctly
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export default store;
