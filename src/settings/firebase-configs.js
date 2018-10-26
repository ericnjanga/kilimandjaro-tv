/**
 * Firebase configuration
 */

import firebase from 'firebase';

// const env

export const firebaseConfig = {
  dev: {
    apiKey: 'AIzaSyCtSuvI7RGLS9JIz1DLtiu9Za8jMF7NZNo',
    authDomain: 'kilimandjaro-tv.firebaseapp.com',
    databaseURL: 'https://kilimandjaro-tv.firebaseio.com',
    projectId: 'kilimandjaro-tv',
    storageBucket: 'kilimandjaro-tv.appspot.com',
    messagingSenderId: '25676979886',
  },
  prod: {
    apiKey: 'AIzaSyBOAG43skMxFHF2zKEiN4VGoeFZFmD-FX0',
    authDomain: 'dealerks-e9540.firebaseapp.com',
    databaseURL: 'https://dealerks-e9540.firebaseio.com',
    projectId: 'dealerks-e9540',
    storageBucket: 'dealerks-e9540.appspot.com',
    messagingSenderId: '25676979886',
  },
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig.dev); // 'dev or 'prod'

// Get Firebase references
export const DATABASE = firebase.database(); // database
export const STORAGE = firebase.storage(); // images and ...
// export const PROVIDER = new firebase.auth.GoogleAuthProvider(); // provider
// export const AUTH = firebase.auth(); // auth


export default firebase;