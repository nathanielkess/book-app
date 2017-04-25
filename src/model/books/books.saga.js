import R from 'ramda';
import { call, take, select, put, fork } from 'redux-saga/effects';
import BOOKS from './books.types';
import { database } from './../../api/firebase';
import { getTheUser, getUid } from './../raw-selectors';
import { createBooksIveReadAddedEventChannel } from './books.service';
import AUTH from './../auth/auth.types';
import { onBooksIReadChanged } from './books.actions';

const bookRef = database.ref('books');
const userRef = database.ref('users');

function *addNewbookReadByUser(book, { uid }) {
<<<<<<< HEAD
  const existingBook = yield bookRef.child(book.ISBN).once('value');
  if (R.isNil(existingBook.val())) {
    yield bookRef.child(book.ISBN).set(book);
  }
=======
  yield bookRef.child(book.ISBN).set(book);
>>>>>>> real data added for new book
  yield bookRef.child(`/${book.ISBN}/readBy/${uid}`).set(true);
  yield userRef.child(`/${uid}/booksRead/${book.ISBN}`).set(true);
}

// tries to add a book when a book is 'read'
function *watchForIReadABook() {
  while (true) {
    const { payload: book } = yield take(BOOKS.I_READ_A_BOOK);
    const currentUser = yield select(getTheUser);
    yield* addNewbookReadByUser(book, currentUser);
  }
}

function* udpateStoreWhenBooksIReadAdded() {
  const uid = yield select(getUid);
  const updateChannel = createBooksIveReadAddedEventChannel(uid);
  while (true) {
    const newISBN = yield take(updateChannel);
    yield put(onBooksIReadChanged(newISBN));
  }
}

function* watchForBooksIReadAdded() {
  while (true) {
    yield take(AUTH.SUCCEEDED);
    yield fork(udpateStoreWhenBooksIReadAdded);
  }
}

export function* startBookshWatchers() {
  yield [
    call(watchForIReadABook),
    call(watchForBooksIReadAdded),
  ];
}
