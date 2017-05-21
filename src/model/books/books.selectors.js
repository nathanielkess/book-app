import FuzzySearch from 'fuzzy-search';
import R from 'ramda';
import { createSelector } from 'reselect';
import { getBooks as getRawBooks, getBooksRead } from './../raw-selectors';

const addReadPropToObj = obj => ({ ...obj, isRead: true });

const addReadPropertyByISBN = (books, ISBN) => {
  const index = R.findIndex(R.propEq('ISBN', ISBN))(books);
  return R.adjust(addReadPropToObj, index, books);
};

const fuzzy = books => (term) => {
  const searcher = new FuzzySearch(books, ['ISBN', 'author', 'title'], {
    caseSensitive: false,
  });
  return searcher.search(term);
};

export const getBooks = createSelector(
  [getRawBooks, getBooksRead],
  (rawBooks, ISBNsOfBooksIRead) => R.reduce(
    addReadPropertyByISBN,
    rawBooks,
    ISBNsOfBooksIRead,
  ));

export const getFilteredBooks = createSelector(
  [getBooks],
  (books) => {
    if (books.length > 0) {
      return fuzzy(books)('Steve');
    }
    return books;
  });
