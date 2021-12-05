// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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
export const db = getFirestore();
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signinWithGoogle = () => signInWithPopup(auth, provider);

// custom func
export const addUser = async (userAuth, additionalData) => {
  if (!userAuth) return null;
  const ref = doc(db, `user/${userAuth.uid}`);
  const snapshot = await getDoc(ref);
  //console.log(ref);
  //console.log(snapshot);
  if (!snapshot.exists()) {
    const {displayName, email} = userAuth;
    const currTime = new Date();
    const userProfile = {
      displayName, 
      email,
      currTime,
      ...additionalData
    }
    try {
      await setDoc(ref, userProfile);
    } catch (err) {
      console.log("error msg: ", err);
    }
  }
  return ref;
}

export default app;
