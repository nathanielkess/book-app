import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCRLWlZ2jpqNMpGgIcgIjbHdSDpjRMbsVs',
  authDomain: 'book-app-fe391.firebaseapp.com',
  databaseURL: 'https://book-app-fe391.firebaseio.com',
  storageBucket: 'book-app-fe391.appspot.com',
  messagingSenderId: '49613841346',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
