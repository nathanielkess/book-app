import { eventChannel } from 'redux-saga';
import { database } from './../../api/firebase';

const chatsRef = database.ref('chats');

export const createChatsRecievedEventChannel = (chatId) => {
  const listener = eventChannel(
    (emit) => {
      chatsRef.child(`/${chatId}`).on(
        'child_added',
        data => emit(data.val()),
      );
      return () => chatsRef.child(`/${chatId}`).off('child_added');
    },
  );
  return listener;
};
