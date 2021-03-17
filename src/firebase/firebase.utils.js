import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMXu7e_WVLiRsuXDs8FwLwxR7u0UR-V0Q",
    authDomain: "crwn-db-82a88.firebaseapp.com",
    projectId: "crwn-db-82a88",
    storageBucket: "crwn-db-82a88.appspot.com",
    messagingSenderId: "179202620054",
    appId: "1:179202620054:web:8a425b2e788433f357a0b7",
    measurementId: "G-0RQ6VCXT8Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;