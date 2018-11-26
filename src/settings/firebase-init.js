
/**
 * Firebase configuration
 */

import firebase from 'firebase';
import firebaseConfig from './firebase-configs';



// Initialize Firebase
firebase.initializeApp(firebaseConfig.dev); // 'dev or 'prod'

// Get Firebase references
export const DATABASE = firebase.database(); // database
export const STORAGE = firebase.storage(); // images and ...
// export const PROVIDER = new firebase.auth.GoogleAuthProvider(); // provider
// export const AUTH = firebase.auth(); // auth


export default firebase;