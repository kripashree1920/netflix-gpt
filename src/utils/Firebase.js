// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0G7N1hfHpv6KkzJBoHyMTO31urHB7h04",
  authDomain: "netflixgpt-867bd.firebaseapp.com",
  projectId: "netflixgpt-867bd",
  storageBucket: "netflixgpt-867bd.firebasestorage.app",
  messagingSenderId: "882648461833",
  appId: "1:882648461833:web:a97bc34ac1da88c31bfed8",
  measurementId: "G-L6P3F1N8PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);