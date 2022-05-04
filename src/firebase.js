import firebase from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz3cgp4-btRwAG93vKS4vfp_oy_BtR16E",
  authDomain: "recuperatusmultas-dd892.firebaseapp.com",
  projectId: "recuperatusmultas-dd892",
  storageBucket: "recuperatusmultas-dd892.appspot.com",
  messagingSenderId: "441157435137",
  appId: "1:441157435137:web:cf423ff219ca5c51f7a500",
  measurementId: "G-7EZ42N592X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);