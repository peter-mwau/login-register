// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS5up-yJzvCLSLgkUZqIEG2Tl03uC8O1I",
  authDomain: "login-register-7ccef.firebaseapp.com",
  projectId: "login-register-7ccef",
  storageBucket: "login-register-7ccef.appspot.com",
  messagingSenderId: "190642192859",
  appId: "1:190642192859:web:9fd1880e63973c41e067fe",
  measurementId: "G-5KVCCFPVDY"
};

// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)

// Expose the instances we'll need
export { app, firestore, auth }