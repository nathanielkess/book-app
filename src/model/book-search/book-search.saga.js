import BOOKSEARCH from './book-search.types';
import { getBookSearhTerm } from './../raw-selectors';
import { call, take, select, put } from 'redux-saga/effects';
import data from './../../api/data';
import { onFetchBooks } from './../books/books.actions';

function *bookSearchAttempt() {
  while (true) {
    yield take(BOOKSEARCH.SEARCH_ATTEMPTED);
    const searchTerm = yield select(getBookSearhTerm);
    const searchedBooksResult = yield data.getSearchRemoteBooks(searchTerm)
    yield put(onFetchBooks(searchedBooksResult));
  }
}

export function* startBookSearchWatchers() {
  yield [
    call(bookSearchAttempt),
  ]
}