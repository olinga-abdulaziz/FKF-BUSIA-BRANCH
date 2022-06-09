// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBU2Oo-X7rvgjR1XzD4gGy_GSjXkKbxKk",
  authDomain: "fkfapp-91e9e.firebaseapp.com",
  projectId: "fkfapp-91e9e",
  storageBucket: "fkfapp-91e9e.appspot.com",
  messagingSenderId: "631395987640",
  appId: "1:631395987640:web:4c88c97862adb9f526844d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);