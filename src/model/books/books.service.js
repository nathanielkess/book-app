import { eventChannel } from 'redux-saga';
import { database } from './../../api/firebase';

const userRef = database.ref('users');

export const createBooksIveReadAddedEventChannel = (uid) => {
  const listener = eventChannel(
    (emit) => {
      userRef.child(`/${uid}/booksRead`).on(
        'child_added',
        data => emit(data.val()),
      );
      return () => userRef.off(listener);
    },
  );
  return listener;
};
