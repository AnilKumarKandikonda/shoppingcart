import app from './firebase';
import { getDatabase, ref, set } from 'firebase/database';

/**
 * Updates the last updated time in the Firebase Realtime Database.
 *
 * @param {Object} product - Product object containing information like id, title, price, image, and quantity.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
export const lastUpdatedTime = async (product) => {
    try {
        const db = getDatabase(app);
        const dataRef = ref(db, `lastUpdated/`);
        await set(dataRef, (new Date()).toString());
    }
    catch (error) {
        console.log(error);
    }

}