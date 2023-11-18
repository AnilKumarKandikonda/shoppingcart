import axios from 'axios';
import * as actionTypes from '../../../actionTypes/actionTypes';

/**
 * Action creator for indicating the start of the product fetching process.
 *
 * @returns {Object} - Action object for indicating the start of the fetching process.
 */
export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_LOADING
    }
}

/**
 * Action creator for updating the Redux store with fetched products.
 *
 * @param {Array} data - Array of products fetched from the API.
 * @returns {Object} - Action object for updating the store with the fetched products.
 */
export const fetchProductsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        data: data,
    }
}

/**
 * Action creator for indicating the failure of the product fetching process.
 *
 * @param {Object} error - Object containing information about the error.
 * @returns {Object} - Action object for indicating the failure of the fetching process.
 */
export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}

/**
 * Asynchronous action creator for fetching products from the API.
 *
 * @returns {Function} - Thunk function for asynchronous dispatch.
 */
export const fetchProductsDetails = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.get('https://fakestoreapi.com/products?limit=20', config)
            .then(res => {
                dispatch(fetchProductsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchProductsFail({ message: 'Something Went Wrong ' }));
            });
    }
}
