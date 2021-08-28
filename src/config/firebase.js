// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyArepXqmd2yY97FIxNrhfScIZz2DDr7uPI",
    authDomain: "technojam-blog-6a0a1.firebaseapp.com",
    projectId: "technojam-blog-6a0a1",
    storageBucket: "technojam-blog-6a0a1.appspot.com",
    messagingSenderId: "1069554968187",
    appId: "1:1069554968187:web:f92be64a2f4c73036e24de"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };