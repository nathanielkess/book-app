import R from 'ramda';
import { put, fork, take } from 'redux-saga/effects';
import api from '../../api/data';
import { onUsersAddOrRemoved, onUsersEdited } from './users.actions';
import { database } from './../../api/firebase';
import AUTH from './../auth/auth.types';

const userRef = database.ref('users');

const transformUser = ({ displayName, uid }) => ({
  displayName,
  isOnline: true,
  uid,
});

const getUid = R.prop('uid');

function* tryToAddUser(user) {
  const uid = getUid(user);
  const existingUser = yield userRef.child(uid).once('value');
  if (R.isNil(existingUser.val())) {
    yield userRef.child(uid).set(user);
  }
}

export function* setUserOnlineState(uid, isOnline) {
  yield userRef.child(`/${uid}/isOnline`).set(isOnline);
}

function* watchForUsersUpdates() {
  const updateChannel = api.createUsersEventChannel();
  while (true) {
    const rawUser = yield take(updateChannel);
    const user = transformUser(rawUser);
    yield put(onUsersAddOrRemoved(user));
  }
}

function* watchForUserDetailsChange() {
  const channel = api.userDetailsChangedChannel();
  while (true) {
    const userDetails = yield take(channel);
    yield put(onUsersEdited(userDetails));
  }
}

function* watchForLoginSuccess() {
  while (true) {
    const { payload: { user } } = yield take(AUTH.SUCCEEDED);
    yield* tryToAddUser(user);
    yield setUserOnlineState(getUid(user), true);
  }
}

export function* startUsersWatchers() {
  yield fork(watchForUserDetailsChange);
  yield fork(watchForUsersUpdates);
  yield fork(watchForLoginSuccess);
}
