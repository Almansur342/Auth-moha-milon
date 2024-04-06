// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1nlUaRnJgqD_sd-Xn4J6OQdACIG9ArY0",
  authDomain: "auth-moha-milon-56d90.firebaseapp.com",
  projectId: "auth-moha-milon-56d90",
  storageBucket: "auth-moha-milon-56d90.appspot.com",
  messagingSenderId: "951612432362",
  appId: "1:951612432362:web:ffa410011880f77ade1c93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;