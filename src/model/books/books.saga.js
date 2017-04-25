import { call, fork, takeLatest, select, take } from 'redux-saga/effects';
import api from '../../api/data';
import BOOKS from './books.types';
import { database } from './../../api/firebase';
import { getCurrentUser } from './../auth/auth.selector';
import AUTH from './../auth/auth.types';

const bookRef = database.ref('books');
const userRef = database.ref('users');

function *addNewbookReadByUser(book, { uid }) {
  yield bookRef.child(book.ISBN).set(book);
  yield bookRef.child(`/${book.ISBN}/readBy/${uid}`).set(true);
  yield userRef.child(`/${uid}/booksRead/${book.ISBN}`).set(true);
}

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

function* watchForUserSuccessAuthToFetchBooksRead() {
  // const { payload } = yield take(AUTH.SUCCEEDED);
  // const userBookRef = database.ref(`users/${payload.user.uid}`);
  // console.log(payload.user.uid);
  // const booksRead = yield userBookRef.once('value');
  // console.log(booksRead.val());

}

function* watchForBooksIReadAdded() {
  // console.log('after the user loggs in then get that users books read');
  // const updateChannel = api.createBooksIveReadAddedEventChannel();
  // while (true) {
  //   const newISBN = yield take(updateChannel);
  //   console.log(newISBN);
  // }
}

export function* startBookshWatchers() {
  yield [
    call(watchForIReadABook),
    // call(watchForBooksIReadAdded),
    call(watchForUserSuccessAuthToFetchBooksRead),
  ];
}
