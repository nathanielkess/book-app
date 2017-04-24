import { call, takeLatest } from 'redux-saga/effects';
import BOOKS from './books.types';
import { database } from './../../api/firebase';

const bookRef = database.ref('books');

function tryToAddABook(book) {
  const { ISBN } = book;
  return new Promise((resolve, reject) => {
    bookRef.once(ISBN, function handleSelect(snap) {
      if (true) {
        console.log('test');
      } else {
        reject('This book already exists.');
      }
    });
  });
}

function *watchForIReadABook() {
  yield takeLatest(
    ({ type }) => type === BOOKS.I_READ_A_BOOK,
    () => {
      console.log('saga captured I read a book');
    },
  );
}

export function* startBookshWatchers() {
  yield [
    call(watchForIReadABook),
  ];
}
