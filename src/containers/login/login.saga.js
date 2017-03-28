import { call, takeLatest } from 'redux-saga/effects';
import LOGIN from './login.types';
import { auth, googleAuthProvider, database } from '../../api/firebase';


const userRef = database.ref('users');


function *watchForGoogleLoginAttempt() {
  yield takeLatest(
    ({ type, payload = {} }) => {
      const { authType } = payload;
      return type === LOGIN.ATTEMPTING && authType === 'google';
    },
    function* login() {
      const user = yield auth.signInWithPopup(googleAuthProvider);
      yield console.log(auth.currentUser);
    },
  );
}

export function* startLoginWatchers() {
  yield [
    call(watchForGoogleLoginAttempt),
  ];
}
