import { put, fork, take } from 'redux-saga/effects';
import api from '../../api/data';
import { onUsersUpdated } from './users.actions';

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
    yield put(onUsersUpdated(user));
  }
}

export function* startUsersWatchers() {
  yield fork(watchForUsersUpdates);
}
