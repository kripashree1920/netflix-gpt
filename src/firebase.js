// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh48hQkagk1-PmUmr34kn5DBr4JrjB8-o",
  authDomain: "netflix-gpt-b3277.firebaseapp.com",
  projectId: "netflix-gpt-b3277",
  storageBucket: "netflix-gpt-b3277.firebasestorage.app",
  messagingSenderId: "414403756768",
  appId: "1:414403756768:web:a073d3cbf8439e7e024685",
  measurementId: "G-69L98JR6C3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
