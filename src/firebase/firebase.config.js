// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdg85wlBNiMdQ9YYXoxBpido5hhxEnn1Q",
  authDomain: "finease-ae410.firebaseapp.com",
  projectId: "finease-ae410",
  storageBucket: "finease-ae410.firebasestorage.app",
  messagingSenderId: "734722130016",
  appId: "1:734722130016:web:0a15cf6296e74814e00305",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Google Provider
const googleProvider = new GoogleAuthProvider();

// Export everything needed
export { app, auth, googleProvider };
