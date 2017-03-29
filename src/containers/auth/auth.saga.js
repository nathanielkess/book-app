import R from 'ramda';
import { call, takeLatest, put } from 'redux-saga/effects';
import AUTH from './auth.types';
import api from '../../api/data';
import { onLoginSuccess } from './auth.actions';

const transformUser = R.pick([
  'displayName',
  'photoURL',
  'email',
  'uid',
]);

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

export function* startAuthWatchers() {
  yield [
    call(watchForGoogleLoginAttempt),
  ];
}