import { startAuthWatchers } from './model/auth/auth.saga';
import { startUsersWatchers } from './model/users/users.saga';
import { startBookshWatchers } from './model/books/books.saga';
import { startChatshWatchers } from './model/chats/chats.saga';

export function * helloSaga() {
  yield 'hello saga';
}

export default function * rootSaga() {
  yield [
    helloSaga(),
    startChatshWatchers(),
    startAuthWatchers(),
    startUsersWatchers(),
    startBookshWatchers(),
  ];
}
