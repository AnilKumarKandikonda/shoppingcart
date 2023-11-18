import app from './firebase';
import { getDatabase, ref, remove, update } from 'firebase/database';

/**
 * Updates or inserts cart data for a given product in the Firebase Realtime Database.
 *
 * @param {Object} product - Product object containing information like id, title, price, image, and quantity.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
export const updateInsertCartData = async (product) => {
    try {
        const db = getDatabase(app);
        const dataRef = ref(db, `cart/${product.id}`);
        await update(dataRef, { ...product });
    }
    catch (error) {
        console.log(error);
    }

}

/**
 * Clears all cart data in the Firebase Realtime Database.
 *
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
export const clearCartData = async () => {
    try {
        const db = getDatabase(app);
        const dataRef = ref(db, `cart/`);
        await remove(dataRef);
    }
    catch (error) {
        console.log(error);
    }

}

/**
 * Removes cart data for a specific product ID from the Firebase Realtime Database.
 *
 * @param {string} cartId - ID of the product in the cart.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
export const removeDataFromCartId = async (cartId) => {
    try {
        const db = getDatabase(app);
        const dataRef = ref(db, `cart/${cartId}/`);
        await remove(dataRef);
    }
    catch (error) {
        console.log(error);
    }

}
