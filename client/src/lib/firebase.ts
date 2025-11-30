// Firebase configuration and initialization for ReactScreenFlow
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFNBTZG0jMVCUFaBHxouRVPKO1ohBxmh0",
  authDomain: "shukuma-app-dc0f4.firebaseapp.com",
  projectId: "shukuma-app-dc0f4",
  storageBucket: "shukuma-app-dc0f4.firebasestorage.app",
  messagingSenderId: "856025374814",
  appId: "1:856025374814:web:e35554572e81d29d6b94cf",
  measurementId: "G-TC2G9D3PEQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
