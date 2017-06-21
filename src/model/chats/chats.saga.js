import { call, take, select, put, race, fork } from 'redux-saga/effects';
import CHATS from './chats.types';
import { database } from './../../api/firebase';
import { getChatId, getUid } from './../raw-selectors';
import { onSetChatId, onMessageRecieved } from './chats.actions';
import { createChatsRecievedEventChannel } from './chats.service';

const chatsRef = database.ref('chats');

function *fetchChatId(theirId) {
  const chatId = yield select(getChatId);
  if (chatId) {
    return chatId;
  }
  const myId = yield select(getUid);
  const chatId1 = `${myId}_${theirId}`;
  const chatId2 = `${theirId}_${myId}`;

  const newId = yield chatsRef.child(`/${chatId1}`).once('value').then((snap) => {
    if (snap.val()) {
      return chatId1;
    }
    return chatId2;
  });
  return newId;
}

function *listenForChatsRecievedChannel() {
  const chatId = yield select(getChatId);
  const updateChannel = createChatsRecievedEventChannel(chatId);
  while (true) {
    const { message, stop } = yield race({
      message: take(updateChannel),
      stop: take(CHATS.CHATTING_WITH),
    });
    if (stop) {
      yield updateChannel.close();
      yield listenForChatsRecievedChannel();
    }
    yield put(onMessageRecieved(message));
  }
}

function *watchForStartingAChat() {
  while (true) {
    const { payload: chattingWith } = yield take(CHATS.CHATTING_WITH);
    const chatId = yield fetchChatId(chattingWith.uid);
    yield put(onSetChatId(chatId));
    yield fork(listenForChatsRecievedChannel);
  }
}

function *watchForMessageSent() {
  while (true) {
    const { payload: message } = yield take(CHATS.MESSAGE_SENT);
    const chatId = yield select(getChatId);
    const uid = yield select(getUid);
    yield chatsRef.child(`/${chatId}`).push({
      message,
      uid,
    });
  }
}

export function *startChatshWatchers() {
  yield [
    call(watchForMessageSent),
    call(watchForStartingAChat),
  ];
}
