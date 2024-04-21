// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnFQCY0vHHCsMO6y53g7SFXe7sWhotHcc",
    authDomain: "kwitter-reloaded-ebaf4.firebaseapp.com",
    projectId: "kwitter-reloaded-ebaf4",
    storageBucket: "kwitter-reloaded-ebaf4.appspot.com",
    messagingSenderId: "842794431822",
    appId: "1:842794431822:web:2c9cb05551fdfd44af9a1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
