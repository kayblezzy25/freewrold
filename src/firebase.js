// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq9j8u_Q_T4ijQhmX2K2ZG_SM6OAmvkMs",
  authDomain: "freewrold-e5033.firebaseapp.com",
  projectId: "freewrold-e5033",
  storageBucket: "freewrold-e5033.firebasestorage.app",
  messagingSenderId: "896690335543",
  appId: "1:896690335543:web:80a26a554ddd7a68beb4b2",
  measurementId: "G-QXX1EFQPQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);