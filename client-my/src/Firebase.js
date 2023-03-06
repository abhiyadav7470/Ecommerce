import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBBG0CEpIc9wzlWUUxmCi0NpPysGRkR-7s",
    authDomain: "ecommerceweb-af5bc.firebaseapp.com",
    projectId: "ecommerceweb-af5bc",
    storageBucket: "ecommerceweb-af5bc.appspot.com",
    messagingSenderId: "118393726794",
    appId: "1:118393726794:web:07b2d6600f731025a503b3"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth();