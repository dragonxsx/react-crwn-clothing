import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDTEJFgJpGM4DOq4AH-m1e1_gBn3nyMsus",
    authDomain: "crwn-db-94ead.firebaseapp.com",
    projectId: "crwn-db-94ead",
    storageBucket: "crwn-db-94ead.appspot.com",
    messagingSenderId: "572471854370",
    appId: "1:572471854370:web:bd4d90fddf35e6bff4d17b",
    measurementId: "G-JVDWBYTRXD"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;