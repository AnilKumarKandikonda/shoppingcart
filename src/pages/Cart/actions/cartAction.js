
import * as actionTypes from '../../../actionTypes/actionTypes';
import app from '../../../firebase/firebase'
import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, signInAnonymously } from "firebase/auth";

/**
 * Action creator for updating the Redux store with fetched cart product details.
 *
 * @param {Array} data - Array of cart product details.
 * @returns {Object} - Action object for updating the store.
 */
export const fetchCartProductsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_CART_DETAILS,
        data: data,
    }
}

/**
 * Asynchronous action creator for fetching cart product details from Firebase.
 *
 * @returns {Function} - Thunk function for asynchronous dispatch.
 */
export const fetchCartProductsDetails = () => {
    return dispatch => {
        const auth = getAuth();
        // console.log(auth);
        signInAnonymously(auth)
            .then(async () => {
                const db = getDatabase(app);
                const dataRef = ref(db, 'cart/');
                const snapshot = await get(dataRef);
                if (snapshot.exists()) {
                     // Mapping the cart items from the snapshot data
                    const cartItems = Object.keys(snapshot.val()).map((key) => {
                        const item = snapshot.val()[key];
                        return {
                            ...item
                        }
                    });
                    // Dispatching the success action with the cart items
                    dispatch(fetchCartProductsSuccess(cartItems));
                    console.log(cartItems);
                } else {
                    // Dispatching the success action with an empty array if no data exists
                    dispatch(fetchCartProductsSuccess([]));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

/**
 * Action creator for adding a product to the cart in the Redux store.
 *
 * @param {Object} product - Product object to be added to the cart.
 * @returns {Object} - Action object for updating the store.
 */
export const addProductToCart = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT_CART,
        product: product,
    }
}

/**
 * Action creator for removing a product from the cart in the Redux store.
 *
 * @param {Object} product - Product object to be removed from the cart.
 * @returns {Object} - Action object for updating the store.
 */
export const removeProductToCart = (product) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        product: product,
    }
}

/**
 * Action creator for clearing cart details in the Redux store.
 *
 * @returns {Object} - Action object for updating the store.
 */
export const clearCartDetails = () => {
    return {
        type: actionTypes.CLEAR_CART,
    }
}

