import R from 'ramda';
import { call, take, select, put, fork } from 'redux-saga/effects';
import BOOKS from './books.types';
import { database } from './../../api/firebase';
import { getTheUser, getUid, getBookSearchTerm } from './../raw-selectors';
import bookService from './books.service';
import AUTH from './../auth/auth.types';
import { onBooksIReadChanged, onFetchBooks, onBookNetworkDetailsRecieved } from './books.actions';

const bookRef = database.ref('books');
const userRef = database.ref('users');

function *getUsersWhoRead(book) {
  const userIDs = yield bookRef.child(`/${book.ISBN}/readBy`).once('value');
  const arrUserIDs = Object.keys(userIDs.val());
  let i = 0;
  const users = [];

  while (i < arrUserIDs.length) {
    const user = yield userRef.child(arrUserIDs[i]).once('value');
    users.push(user.val());
    i += 1;
  }
  return users;
}

function *addNewbookReadByUser(book, { uid }) {
  const existingBook = yield bookRef.child(book.ISBN).once('value');
  if (R.isNil(existingBook.val())) {
    yield bookRef.child(book.ISBN).set(book);
  }
  yield bookRef.child(`/${book.ISBN}/readBy/${uid}`).set(true);
  yield userRef.child(`/${uid}/booksRead/${book.ISBN}`).set(book);
}

function *watchForIReadABook() {
  while (true) {
    const { payload: book } = yield take(BOOKS.I_READ_A_BOOK);
    const currentUser = yield select(getTheUser);
    yield* addNewbookReadByUser(book, currentUser);
  }
}

function *updateStoreWithBookIRead(book) {
  const users = yield* getUsersWhoRead(book);
  yield put(onBooksIReadChanged({ ...book, users }));
}

function* listenForBookIReadChannel() {
  const uid = yield select(getUid);
  const updateChannel = bookService.createBooksIveReadAddedEventChannel(uid);
  while (true) {
    const book = yield take(updateChannel);
    yield fork(updateStoreWithBookIRead, book);
  }
}

function *watchForBooksIReadAdded() {
  while (true) {
    yield take(AUTH.SUCCEEDED);
    yield fork(listenForBookIReadChannel);
  }
}

const getISBN13FromIdentifier = identifiers =>
  identifiers.filter(identifier => identifier.type === 'ISBN_13')
  .map(identifier => identifier.identifier)[0];

const hasISBN = book => (book.ISBN);

function *watchForBookSearchAttempt() {
  while (true) {
    yield take(BOOKS.SEARCH_ATTEMPTED);
    const searchTerm = yield select(getBookSearchTerm);
    const searchedBooksResult = yield bookService.getBooksFromSearch(searchTerm)
      .then((books) => {
        console.log(`10 out of ${books.totalItems} books found`);
        return books;
      })
      .then(({ items }) => items
          .map(book => book.volumeInfo)
          .map(book => ({
            ISBN: getISBN13FromIdentifier(book.industryIdentifiers),
            author: book.authors[0],
            coverImagePath: book.imageLinks.thumbnail,
            title: book.title,
          })).filter(hasISBN));

    console.log('actual returned books', searchedBooksResult.length);

    yield put(onFetchBooks(searchedBooksResult));
  }
}

export function *watchForBookNetworkSelected() {
  while (true) {
    const { payload: book } = yield take(BOOKS.NETWORK_SELECTED);
    const users = yield* getUsersWhoRead(book);
    yield put(onBookNetworkDetailsRecieved({ book, users }));
  }
}

export function* startBookshWatchers() {
  yield [
    call(watchForIReadABook),
    call(watchForBooksIReadAdded),
    call(watchForBookSearchAttempt),
    call(watchForBookNetworkSelected),
  ];
}
