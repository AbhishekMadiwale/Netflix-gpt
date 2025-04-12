// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZCUa4uCirdofT2ABSRHKp5cmHvGQPKGg",
  authDomain: "netflixgpt-c4efa.firebaseapp.com",
  projectId: "netflixgpt-c4efa",
  storageBucket: "netflixgpt-c4efa.firebasestorage.app",
  messagingSenderId: "57161440800",
  appId: "1:57161440800:web:1717a7b63234d351e62645",
  measurementId: "G-4M5PXQGD37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
