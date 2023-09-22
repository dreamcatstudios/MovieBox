import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo_aQBZe8TTI8PisTiZRiEFvT6HaenK84",
  authDomain: "moviebox-1d242.firebaseapp.com",
  projectId: "moviebox-1d242",
  storageBucket: "moviebox-1d242.appspot.com",
  messagingSenderId: "583382931700",
  appId: "1:583382931700:web:7981474a773e483c9426a1",
};

export const googleProvider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
