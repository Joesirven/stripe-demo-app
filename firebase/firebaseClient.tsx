// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHO_x3WJZzDSGFAh9yhpj_Ky4mDhRF-cM",
  authDomain: "stripe-nextjs-demo.firebaseapp.com",
  projectId: "stripe-nextjs-demo",
  storageBucket: "stripe-nextjs-demo.appspot.com",
  messagingSenderId: "687836250584",
  appId: "1:687836250584:web:cfdee16fc6870d3c9232ad",
  measurementId: "G-4SNTJ6F7T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const initFirebase = () => {
    return app;
};
