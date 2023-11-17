import axios from 'axios';
import * as actionTypes from '../../../actionTypes/actionTypes';

/*****************************************
 * products fetch loading
 *****************************************/
export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_LOADING
    }
}

/*****************************************
 * products fetch success
 *****************************************/
export const fetchProductsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        data: data,
    }
}


/*****************************************
 * products fetch fail
 *****************************************/
export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error
    }
}

/*****************************************
 * fetch products
 *****************************************/
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
                console.log(res);
                dispatch(fetchProductsSuccess(res.data));
            })
            .catch(err => {
                dispatch(fetchProductsFail({ message: 'Something Went Wrong ' }));
            });
    }
}
