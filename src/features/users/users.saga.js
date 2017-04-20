import { put, fork, take } from 'redux-saga/effects';
import api from '../../api/data';
import { onUsersAddOrRemoved, onUsersEdited } from './users.actions';

const transformUser = ({ displayName, uid }) => ({
  displayName,
  isOnline: true,
  uid,
});

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

export function* startUsersWatchers() {
  yield fork(watchForUserDetailsChange);
  yield fork(watchForUsersUpdates);
}
