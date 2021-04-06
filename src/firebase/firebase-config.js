import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyApZr5rUYwcRkVZHqzc3LdTSE8jAaw-JxQ",
    authDomain: "react-app-journal-12d85.firebaseapp.com",
    projectId: "react-app-journal-12d85",
    storageBucket: "react-app-journal-12d85.appspot.com",
    messagingSenderId: "692037924935",
    appId: "1:692037924935:web:13a4e90cbf28ddc9151962"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}