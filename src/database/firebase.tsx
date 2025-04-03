
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvDRN0rAMRpIK8uo4fdGUD0Ex24hVK9Qg",
  authDomain: "envinovasmartech-79cad.firebaseapp.com",
  projectId: "envinovasmartech-79cad",
  storageBucket: "envinovasmartech-79cad.firebasestorage.app",
  messagingSenderId: "349342015885",
  appId: "1:349342015885:web:0baca70a2aa3e42e2dddc4",
  measurementId: "G-0SJJ8SV1S0"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance
const auth = getAuth(app);
const storage = getStorage(app);

// Optional: Enable analytics if needed
// getAnalytics(app);

export { db, auth, storage, app }; // Export Firestore instance





