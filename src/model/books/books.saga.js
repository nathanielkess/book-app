import { call, takeLatest } from 'redux-saga/effects';
import BOOKS from './books.types';
import { database } from './../../api/firebase';

const bookRef = database.ref('books');

const addNewbookReadByUser = (book, { uid }) => {
  bookRef.child(book.ISBN).set({
    ...book,
    readBy: { uid },
  });
};

function *watchForIReadABook() {
  yield takeLatest(
    ({ type }) => type === BOOKS.I_READ_A_BOOK,
    function *addBook({ payload: book }) {
      const existingBook = yield bookRef.child(book.ISBN).once('value');
      if (!existingBook.val()) {
        addNewbookReadByUser(book, { uid: '12345678' });
      }
    },
  );
}

export function* startBookshWatchers() {
  yield [
    call(watchForIReadABook),
  ];
}
