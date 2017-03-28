import { call, takeLatest } from 'redux-saga/effects';
import LOGIN from './login.types';


function *watchForGoogleLoginAttempt() {
  yield takeLatest(
    ({ type, payload = {} }) => {
      const { authType } = payload;
      return type === LOGIN.ATTEMPTING && authType === 'google';
    },
    function* login() {
      yield console.log('go login via firebase');
    },
  );
}

export function* startLoginWatchers() {
  yield [
    call(watchForGoogleLoginAttempt),
  ];
}
