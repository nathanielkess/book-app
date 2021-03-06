import { eventChannel } from 'redux-saga';
import { database } from './../../api/firebase';

const userRef = database.ref('users');

const createBooksIveReadAddedEventChannel = (uid) => {
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

const getBooksFromSearch = query =>
  fetch(`https://www.googleapis.com/books/v1/volumes?q="${query}"`)
    .then(data => data.json());

export default {
  createBooksIveReadAddedEventChannel,
  getBooksFromSearch,
};
