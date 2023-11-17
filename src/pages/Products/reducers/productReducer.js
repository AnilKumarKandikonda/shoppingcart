import * as actionTypes from '../../../actionTypes/actionTypes';
import { updateObject } from '../../../Components/Utilities/utility';

const initialState = {
    // coming soon page fetch from server base details
    productsLoading: false,
    productsList: [],
    productsFail: {}
}

const fetchProductsStart = (state, action) => {
    return updateObject(state, {
        productsLoading: true,
    });
};

const fetchProductsSuccess = (state, action) => {
    return updateObject(state, {
        productsList: [...action.data],
        productsLoading: false,
        productsFail: {}
    });
};

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