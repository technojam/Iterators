import firebase from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyD1LWajLilDJN7y7H8qVveFXdqUzipw1YU",
    authDomain: "technojam-blog.firebaseapp.com",
    projectId: "technojam-blog",
    storageBucket: "technojam-blog.appspot.com",
    messagingSenderId: "547214682382",
    appId: "1:547214682382:web:76622d4584cbf40c318f5f",
    measurementId: "G-2F3WVR8J46"
};

const app = firebase.initializeApp(firebaseConfig);