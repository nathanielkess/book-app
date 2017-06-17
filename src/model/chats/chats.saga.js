import { call, take } from 'redux-saga/effects';
import CHATS from './chats.types';
import { database } from './../../api/firebase';

const chatsRef = database.ref('chats');

// function getChatId() {

// }

function *watchForMessageSent() {
  while (true) {
    const { payload: message } = yield take(CHATS.MESSAGE_SENT);
    console.log('captured message!', message);
  }
}

export function* startChatshWatchers() {
  yield [
    call(watchForMessageSent),
  ];
}
