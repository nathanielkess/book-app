import { startAuthWatchers } from './features/auth/auth.saga';
import { startUsersWatchers } from './features/users/users.saga';

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
