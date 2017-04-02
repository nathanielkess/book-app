import { startAuthWatchers } from './containers/auth/auth.saga';
import { startUsersWatchers } from './containers/users/users.saga';

export function * helloSaga() {
  yield 'hello saga';
}

export default function * rootSaga() {
  yield [
    helloSaga(),
    startAuthWatchers(),
    startUsersWatchers(),
  ];
}
