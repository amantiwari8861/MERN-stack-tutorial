// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9cZ4RpXdeH7nCHdFcAuAa3FxEFKEMmU0",
  authDomain: "react-chat-a1419.firebaseapp.com",
  projectId: "react-chat-a1419",
  storageBucket: "react-chat-a1419.appspot.com",
  messagingSenderId: "46933723772",
  appId: "1:46933723772:web:cdbfde686ca921f0ec97f9",
  measurementId: "G-D9YWD2TQVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);