import R from 'ramda';
import { call, put, select, take } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase';
import AUTH from './auth.types';
import { onLoginSuccess, onLogOutSuccess } from './auth.actions';
import { getUid } from '../raw-selectors';
import { auth, googleAuthProvider } from '././../../api/firebase';
import { setUserOnlineState } from './../users/users.saga';

function createAuthStateChangedChannel() {
  const listener = eventChannel(
    (emit) => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        const emitttedUser = (user) || {};
        emit(emitttedUser);
      });
      return unsubscribe;
    },
  );
  return listener;
}

const getUserProperties = R.pick([
  'displayName',
  'photoURL',
  'email',
  'uid',
]);

function* logout() {
  const currentUid = yield select(getUid);
  yield setUserOnlineState(currentUid, false);
  yield auth.signOut();
}

function *login() {
  googleAuthProvider.setCustomParameters({
    prompt: 'select_account',
  });
  yield auth.signInWithPopup(googleAuthProvider);
}

function *watchForLoginAttempt() {
  while (true) {
    const { payload: { authType } } = yield take(AUTH.ATTEMPTING);
    try {
      switch (authType) {
        case 'google' :
          yield login();
          break;
        case 'facebook' :
          console.log('login with facebook');
          break;
        case 'logout' :
          yield* logout();
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

function *watchForAuthChange() {
  const userAuthChangedChannel = createAuthStateChangedChannel();
  while (true) {
    const rawUser = yield take(userAuthChangedChannel);
    const user = getUserProperties(rawUser);
    if (R.isEmpty(rawUser)) {
      yield put(onLogOutSuccess());
    } else {
      yield put(onLoginSuccess(user));
    }
  }
}

export function* startAuthWatchers() {
  yield [
    call(watchForAuthChange),
    call(watchForLoginAttempt),
  ];
}
