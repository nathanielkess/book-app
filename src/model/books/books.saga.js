import { call, takeLatest, select } from 'redux-saga/effects';
import BOOKS from './books.types';
import { database } from './../../api/firebase';
import { getCurrentUser } from './../auth/auth.selector';

const bookRef = database.ref('books');
const userRef = database.ref('users');

function *addNewbookReadByUser(book, { uid }) {
  yield bookRef.child(book.ISBN).set(book);
  yield bookRef.child(`/${book.ISBN}/readBy/${uid}`).set(true);
  yield userRef.child(`/${uid}/booksRead/${book.ISBN}`).set(true);
}

const setBookReadOnUser = ({ ISBN, uid }) => {
  userRef.child(uid).child('booksRead').set()
};

function *watchForIReadABook() {
  yield takeLatest(
    ({ type }) => type === BOOKS.I_READ_A_BOOK,
    function *addBook({ payload: book }) {
      const existingBook = yield bookRef.child(book.ISBN).once('value');
      if (!existingBook.val()) {
        const currentUser = yield select(getCurrentUser);
        yield* addNewbookReadByUser(book, currentUser);
      } else {
        console.log('book exists so update the user and the book (instead of adding it)');
      }
    },
  );
}

export function* startBookshWatchers() {
  yield [
    call(watchForIReadABook),
  ];
}
