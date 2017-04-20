import { startAuthWatchers } from './model/auth/auth.saga';
import { startUsersWatchers } from './model/users/users.saga';

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
