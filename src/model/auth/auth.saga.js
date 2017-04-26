import R from 'ramda';
import { call, takeLatest, put, select, take } from 'redux-saga/effects';
import firebase from 'firebase';
import AUTH from './auth.types';
import api from '../../api/data';
import { onLoginSuccess, onLogOutSuccess } from './auth.actions';
import { getUid } from '../raw-selectors';
import { auth, googleAuthProvider, database } from '././../../api/firebase';

const getUserProperties = R.pick([
  'displayName',
  'photoURL',
  'email',
  'uid',
]);

const transformUser = R.compose(
  user => ({
    ...user,
    isOnline: true,
  }),
  getUserProperties,
);

firebase.auth().onAuthStateChanged(function (user) {
  console.log('auth state changed', user);
  console.log('turn this auth state change into a channel emitter so you can grab the event with a saga');
});

function *watchForLoginAttempt() {
  while(true){
    const { payload : { authType } } = yield take(AUTH.ATTEMPTING);
    try {
      switch (authType) {
        case 'google' :
          console.log('login with google');
          const user = yield auth.signInWithPopup(googleAuthProvider);
          break;
        case 'facebook' :
          console.log('login with facebook');
          break;
        default:
          console.log('some other login attempt');
          break;
      }
    } catch (e) {
      console.log('fail to login', e);
    }
  }
}

function *watchForAuthChange(){
  while(true){
    const user = yield auth.onAuthStateChanged();
    console.log('auth state changed', user);
  }
}

// function *watchForGoogleLoginAttempt() {
//   yield takeLatest(
//     ({ type, payload = {} }) => {
//       const { authType } = payload;
//       return type === AUTH.ATTEMPTING && authType === 'google';
//     },
//     function* login() {
//       console.log(console.log('login now'));
//       try {
//         const signedInUser = yield* api.signInWithGoogle();
//         // TODO: handle user failing to login
//         const user = transformUser(signedInUser.user);
//         yield api.addUser(user);
//         yield put(onLoginSuccess(user));
//       } catch (e) {
//         console.log('fail to login', e);
//       }
//     },
//   );
// }

function *watchForLogOutAttempt() {
  yield takeLatest(
    ({ type, payload = {} }) => {
      const { authType } = payload;
      return type === AUTH.ATTEMPTING && authType === 'logout';
    },
    function* logOut() {
      try {
        const currentUid = yield select(getUid);
        yield* api.signOut(currentUid);
        yield put(onLogOutSuccess());
      } catch (e) {
        console.log('failed to logout', e);
      }
    },
  );
}

export function* startAuthWatchers() {
  yield [
    call(watchForAuthChange),
    call(watchForLoginAttempt),
    call(watchForLogOutAttempt),
  ];
}
