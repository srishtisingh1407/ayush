// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEZqTNALXqw0oMEVerJbAE2qNe97HrMIE",
  authDomain: "aayush-777c2.firebaseapp.com",
  projectId: "aayush-777c2",
  storageBucket: "aayush-777c2.appspot.com",
  messagingSenderId: "44447621355",
  appId: "1:44447621355:web:eb05d653c1af3ac6805eae",
  measurementId: "G-1Q0ELZYTVW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);