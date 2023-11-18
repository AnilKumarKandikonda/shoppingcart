import * as actionTypes from '../../../actionTypes/actionTypes';
import { updateObject } from '../../../Components/Utilities/utility';
import { updateInsertCartData, clearCartData, removeDataFromCartId } from '../../../firebase/cartFunctions';

const initialState = {
    cartProducts: [],
}
/**
 * Reducer function for handling the FETCH_CART_DETAILS action.
 *
 * @param {Object} state - Current state of the cart.
 * @param {Object} action - Action object containing the data to update the state.
 * @returns {Object} - Updated state after handling the action.
 */
const fetchCartProductsSuccess = (state, action) => {
    return updateObject(state, {
        cartProducts: [...action.data],
    });
};

/**
 * Reducer function for handling the ADD_PRODUCT_CART action.
 *
 * @param {Object} state - Current state of the cart.
 * @param {Object} action - Action object containing the product to be added to the cart.
 * @returns {Object} - Updated state after handling the action.
 */
const addProductToCart = (state, action) => {
    let itemIndex = state.cartProducts.findIndex(item => item.id === action.product.id);
    let cartData = [...state.cartProducts];
    // console.log(itemIndex);
    if (itemIndex >= 0) {
        let updatedCart = {
            ...state.cartProducts[itemIndex],
            quantity: state.cartProducts[itemIndex].quantity + 1
        }
        const firebaseData = {
            id: updatedCart.id,
            price: updatedCart.price,
            quantity: updatedCart.quantity,
            title: updatedCart.title
        }
        cartData[itemIndex] = firebaseData;

        updateInsertCartData(firebaseData);
    } else {
        cartData.push({ ...action.product, quantity: 1 });
        const firebaseData = {
            id: action.product.id,
            price: action.product.price,
            quantity: 1,
            title: action.product.title
        }
        updateInsertCartData(firebaseData);
    }
    return updateObject(state, {
        cartProducts: [...cartData]
    })
}

/**
 * Reducer function for handling the REMOVE_FROM_CART action.
 *
 * @param {Object} state - Current state of the cart.
 * @param {Object} action - Action object containing the product to be removed from the cart.
 * @returns {Object} - Updated state after handling the action.
 */
const removeProductToCart = (state, action) => {
    let itemIndex = state.cartProducts.findIndex(item => item.id === action.product.id);
    let cartData = [...state.cartProducts];
    if (itemIndex >= 0) {
        let updatedCart = {
            ...state.cartProducts[itemIndex],
            quantity: state.cartProducts[itemIndex].quantity - 1
        }
        if (updatedCart.quantity > 0) {
            const firebaseData = {
                id: updatedCart.id,
                price: updatedCart.price,
                quantity: updatedCart.quantity,
                title: updatedCart.title
            }
            cartData[itemIndex] = firebaseData;
            updateInsertCartData(firebaseData);
        } else {
            cartData.splice(itemIndex, 1);
            removeDataFromCartId(action.product.id);
        }
    }
    return updateObject(state, {
        cartProducts: [...cartData]
    });
}

/**
 * Reducer function for handling the CLEAR_CART action.
 *
 * @param {Object} state - Current state of the cart.
 * @param {Object} action - Action object indicating to clear the cart.
 * @returns {Object} - Updated state after handling the action.
 */
const clearCartDetails = (state, action) => {
    clearCartData();
    return updateObject(state, {
        cartProducts: [],

    })
}

/**
 * Main cart reducer function.
 *
 * @param {Object} state - Current state of the cart.
 * @param {Object} action - Action object indicating the type of action to perform.
 * @returns {Object} - Updated state after handling the action.
 */
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