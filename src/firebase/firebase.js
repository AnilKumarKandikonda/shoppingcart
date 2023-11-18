

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBEZtceYiOooP6f71VVT2rI1dJhP9A_OxI",
    authDomain: "shyftlabs-d4803.firebaseapp.com",
    databaseURL: "https://shyftlabs-d4803-default-rtdb.firebaseio.com",
    projectId: "shyftlabs-d4803",
    storageBucket: "shyftlabs-d4803.appspot.com",
    messagingSenderId: "1991773106",
    appId: "1:1991773106:web:38ca1b25cfd4fcf825b2ab",
    measurementId: "G-592DML21NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
