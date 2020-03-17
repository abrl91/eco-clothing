import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLowYHVyZw9vemcXgO8d8g_iWPEHHu-QI",
    authDomain: "eco-clothing-1acb1.firebaseapp.com",
    databaseURL: "https://eco-clothing-1acb1.firebaseio.com",
    projectId: "eco-clothing-1acb1",
    storageBucket: "eco-clothing-1acb1.appspot.com",
    messagingSenderId: "72726316348",
    appId: "1:72726316348:web:c67655a92a230b08ec8a39",
    measurementId: "G-TB4T9J4ZC2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
    .catch(() => {});

export default firebase;
