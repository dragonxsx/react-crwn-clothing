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

export const createUserProfileDocument = async (authUser, additionalData) => {
    if(!authUser) return;

    const userRef = firestore.doc(`users/${authUser.uid}`);
    const userSnapshot = await userRef.get();
    console.log(userSnapshot);

    if(!userSnapshot.exists) {
        const { displayName, email } = authUser;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('Error creating user ', e.message);
        }
    }

    return userRef;
}

export default firebase;