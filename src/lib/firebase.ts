// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMerk78th4t0YNlh-OcakV03zMVO1_rSc",
  authDomain: "chat-translation-fde99.firebaseapp.com",
  projectId: "chat-translation-fde99",
  storageBucket: "chat-translation-fde99.appspot.com",
  messagingSenderId: "91634414437",
  appId: "1:91634414437:web:429f2d26411a5f298da78c",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)

export { db, auth, functions }
