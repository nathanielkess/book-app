import R from 'ramda';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import AUTH from './auth.types';
import api from '../../api/data';
import { onLoginSuccess, onLogOutSuccess } from './auth.actions';
import { getUid } from '../raw-selectors';

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

function *watchForGoogleLoginAttempt() {
  yield takeLatest(
    ({ type, payload = {} }) => {
      const { authType } = payload;
      return type === AUTH.ATTEMPTING && authType === 'google';
    },
    function* login() {
      try {
        const signedInUser = yield* api.signInWithGoogle();
        // TODO: handle user failing to login
        const user = transformUser(signedInUser.user);
        yield api.addUser(user);
        yield put(onLoginSuccess(user));
      } catch (e) {
        console.log('fail to login', e);
      }
    },
  );
}

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
        yield put(onLogOutSuccess(currentUid));
      } catch (e) {
        console.log('failed to logout', e);
      }
    },
  );
}

export function* startAuthWatchers() {
  yield [
    call(watchForGoogleLoginAttempt),
    call(watchForLogOutAttempt),
  ];
}
