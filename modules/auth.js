// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBL-i9MrOWtp2Ybb5ZV9FFd7LJN87qfbRA",
    authDomain: "teste-ffb5c.firebaseapp.com",
    projectId: "teste-ffb5c",
    storageBucket: "teste-ffb5c.appspot.com",
    messagingSenderId: "504974221125",
    appId: "1:504974221125:web:a6edbb33a8de87ea2da82c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore();

function createUser(email, password, onSuccess, onError) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            onSuccess(userCredential);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            onError(error);
        });
}

function authUser(email, password, onSuccess, onError) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            onSuccess(userCredential);
            // ...
        })
        .catch((error) => {

            onError(error);
        });
}
export { app, createUser, authUser }