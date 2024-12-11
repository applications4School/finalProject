// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD69vjQtIzYmFJiBo7dqUxSSVEdQCFPZbU",
  authDomain: "applicationsfinal-d5269.firebaseapp.com",
  projectId: "applicationsfinal-d5269",
  storageBucket: "applicationsfinal-d5269.firebasestorage.app",
  messagingSenderId: "537877071618",
  appId: "1:537877071618:web:0be00d6c1903310eeaa41b",
  measurementId: "G-33HMWZLM9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);


// Export database
export { db };