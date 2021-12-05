// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAICBtYKI-lXQ0qfIpfit6RwURGDkgId-s",
  authDomain: "ecom-db-401e4.firebaseapp.com",
  projectId: "ecom-db-401e4",
  storageBucket: "ecom-db-401e4.appspot.com",
  messagingSenderId: "721917095411",
  appId: "1:721917095411:web:94cc22f6c0cd9e41773686",
  measurementId: "G-SMBFS7N6CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signinWithGoogle = () => signInWithPopup(auth, provider);

export default app;
