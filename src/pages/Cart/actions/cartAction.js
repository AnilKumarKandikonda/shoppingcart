import axios from 'axios';
import * as actionTypes from '../../../actionTypes/actionTypes';

export const fetchCartProductsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_CART_DETAILS,
        data: data,
    }
}

export const fetchCartProductsDetails = () => {
    return dispatch => {
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        axios.get('https://fakestoreapi.com/carts', config)
            .then(res => {
                console.log(res);
                dispatch(fetchCartProductsSuccess(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}


export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_CART,
        product: product,
    }
}

export const removeProductToCart = (product) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        product: product,
    }
}

export const clearCartDetails = () => {
    return {
        type: actionTypes.CLEAR_CART,
    }
}

