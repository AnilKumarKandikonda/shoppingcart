import * as actionTypes from '../../../actionTypes/actionTypes';
import { updateObject } from '../../../Components/Utilities/utility';

const initialState = {
    cartProducts: [],
}

const fetchCartProductsSuccess = (state, action) => {
    return updateObject(state, {
        cartProducts: [...action.data],
    });
};

const addProductToCart = (state, action) => {
    let itemIndex = state.cartProducts.findIndex(item => item.id === action.product.id);
    let cartData = [...state.cartProducts];
    console.log(itemIndex);
    if (itemIndex >= 0) {
        let updatedCart = {
            ...state.cartProducts[itemIndex],
            quantity: state.cartProducts[itemIndex].quantity + 1
        }
        cartData[itemIndex] = updatedCart;
    } else {
        cartData.push({ ...action.product, quantity: 1 })
    }
    return updateObject(state, {
        cartProducts: [...cartData]
    })
}

const removeProductToCart = (state, action) => {
    let itemIndex = state.cartProducts.findIndex(item => item.id === action.product.id);
    let cartData = [...state.cartProducts];
    if (itemIndex >= 0) {
        let updatedCart = {
            ...state.cartProducts[itemIndex],
            quantity: state.cartProducts[itemIndex].quantity - 1
        }
        if (updatedCart.quantity > 0) {
            cartData[itemIndex] = updatedCart;
        } else {
            cartData.splice(itemIndex, 1);
        }
    }
    return updateObject(state, {
        cartProducts: [...cartData]
    });
}

const clearCartDetails = (state, action) => {
    return updateObject(state, {
        cartProducts: [],

    })
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CART_DETAILS: return fetchCartProductsSuccess(state, action);
        case actionTypes.ADD_PRODUCT_CART: return addProductToCart(state, action);
        case actionTypes.REMOVE_FROM_CART: return removeProductToCart(state, action);
        case actionTypes.CLEAR_CART: return clearCartDetails(state, action);
        default: return state;
    }
}

export default cartReducer;