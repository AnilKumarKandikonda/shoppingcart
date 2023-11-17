import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../pages/Products/reducers/productReducer';
import cartReducer from '../pages/Cart/reducers/cartReducer';


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});