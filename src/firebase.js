// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVTIrdNloIbCslPwZY5gGlH79PGnUjGG8",
    authDomain: "rootgorw.firebaseapp.com",
    projectId: "rootgorw",
    storageBucket: "rootgorw.appspot.com",
    messagingSenderId: "196046848268",
    appId: "1:196046848268:web:fd67ad2313571ec74ec929"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();