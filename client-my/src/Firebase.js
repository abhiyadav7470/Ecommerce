// import * as firebase from 'firebase';
// import { initializeApp } from 'firebase/app';
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB7Fbqd9y8RCByxLyGTsdfcVWkFj0s73e0",
//     authDomain: "ecommerce-7dba0.firebaseapp.com",
//     projectId: "ecommerce-7dba0",
//     storageBucket: "ecommerce-7dba0.appspot.com",
//     messagingSenderId: "1030043578517",
//     appId: "1:1030043578517:web:da927975c60b6f21ae2b9c"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   export const auth = firebase.auth();
//   export const googleAuthProvider = new firebase.auth.googleAuthProvider()




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