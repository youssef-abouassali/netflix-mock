// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGz5gdFqvFDHIy5KyVUprn4dNB1V7tIYU",
  authDomain: "netflix-react-635d7.firebaseapp.com",
  projectId: "netflix-react-635d7",
  storageBucket: "netflix-react-635d7.appspot.com",
  messagingSenderId: "710961196545",
  appId: "1:710961196545:web:244f795e952cd1a7ad1a00"
};
// REACT_APP_FIREBASE_API_KEY=YOUR_HIDDEN_KEY
// REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_HIDDEN_KEY
// REACT_APP_FIREBASE_PROJECT_ID=YOUR_HIDDEN_KEY
// REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_HIDDEN_KEY
// REACT_APP_MESSAGING_SENDER=YOUR_HIDDEN_KEY
// REACT_APP_APP_ID=YOUR_HIDDEN_KEY


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)

