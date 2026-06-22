// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-67d39.firebaseapp.com",
  projectId: "genwebai-67d39",
  storageBucket: "genwebai-67d39.firebasestorage.app",
  messagingSenderId: "963137805604",
  appId: "1:963137805604:web:cbb329df8bca873e3a67b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}