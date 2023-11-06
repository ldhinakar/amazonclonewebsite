import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBm1MpwtsJh3RpHPR9X4P_VZUccc7vMZD8",
    authDomain: "clone-app-ad6fe.firebaseapp.com",
    projectId: "clone-app-ad6fe",
    storageBucket: "clone-app-ad6fe.appspot.com",
    messagingSenderId: "686031032435",
    appId: "1:686031032435:web:73dbcfeb00b38d759e5a06",
    measurementId: "G-PE7DQGV43B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };