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
    apiKey: 'AIzaSyBNwAzZXD-vtUS2w1o-EcdfbYu5FslLZaQ',
    authDomain: 'kilimandjaro-tv-c09af.firebaseapp.com',
    databaseURL: 'https://kilimandjaro-tv-c09af.firebaseio.com',
    projectId: 'kilimandjaro-tv-c09af',
    storageBucket: 'kilimandjaro-tv-c09af.appspot.com',
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