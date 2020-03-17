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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        // if the snapshot doesnt exist we create it => create the snapshot
        try {
            // .set => create (CRUD) // POST
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    // always return the userRef because there is an option that we will need it
    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
    .catch(() => {});

export default firebase;
