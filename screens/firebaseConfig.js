// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo80O9Aw0So4-nuaf94i2aw7qH95K9gB4",
  authDomain: "danentang2-8e85b.firebaseapp.com",
  projectId: "danentang2-8e85b",
  storageBucket: "danentang2-8e85b.appspot.com",
  messagingSenderId: "260419830753",
  appId: "1:260419830753:web:ff2ce540b8d1eaf20748a0",
  measurementId: "G-C16RBNDZJD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE = getFirestore(FIREBASE_APP);
export const DATABASE = getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);
