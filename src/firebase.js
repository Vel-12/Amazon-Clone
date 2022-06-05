// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0W-rUdpGCqwEhamHj3dAOgGUNK5KvNzM",
    authDomain: "clone-4efc2.firebaseapp.com",
    projectId: "clone-4efc2",
    storageBucket: "clone-4efc2.appspot.com",
    messagingSenderId: "142793930624",
    appId: "1:142793930624:web:73810e916db0f1207e7365",
    measurementId: "G-LERNDKRZBZ"
  };

// initialize firebase
const firbaseApp = firebase.initializeApp(firebaseConfig);

//database in firebase
const db = firbaseApp.firestore();

//auth variable
const auth = firebase.auth();

export {db, auth};