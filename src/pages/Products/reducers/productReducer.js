import * as actionTypes from '../../../actionTypes/actionTypes';
import { updateObject } from '../../../Components/Utilities/utility';
import { lastUpdatedTime } from '../../../firebase/generalFunctions';

const initialState = {
    // coming soon page fetch from server base details
    productsLoading: false,
    productsList: [],
    productsFail: {}
}

/**
 * Reducer function for handling the FETCH_PRODUCTS_SUCCESS action.
 *
 * @param {Object} state - Current state of the products.
 * @param {Object} action - Action object containing the fetched products.
 * @returns {Object} - Updated state after handling the action.
 */
const fetchProductsStart = (state, action) => {
    return updateObject(state, {
        productsLoading: true,
    });
};

/**
 * Reducer function for handling the FETCH_PRODUCTS_FAIL action.
 *
 * @param {Object} state - Current state of the products.
 * @param {Object} action - Action object containing information about the fetch failure.
 * @returns {Object} - Updated state after handling the action.
 */
const fetchProductsSuccess = (state, action) => {
    lastUpdatedTime();
    return updateObject(state, {
        productsList: [...action.data],
        productsLoading: false,
        productsFail: {}
    });
};

/**
 * Main products reducer function.
 *
 * @param {Object} state - Current state of the products.
 * @param {Object} action - Action object indicating the type of action to perform.
 * @returns {Object} - Updated state after handling the action.
 */
const fetchProductsFail = (state, action) => {
    return updateObject(state, {
        productsLoading: false,
        productsFail: action.error.message
    });
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        // user login check
        case actionTypes.FETCH_PRODUCTS_LOADING: return fetchProductsStart(state, action);
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action);
        case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail(state, action);
        default: return state;
    }
}

export default productsReducer;