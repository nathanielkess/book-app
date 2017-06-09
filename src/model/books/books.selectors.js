import R from 'ramda';
import { createSelector } from 'reselect';
import { getBooks as getRawBooks, getBooksRead } from './../raw-selectors';

const addReadPropToObj = obj => ({ ...obj, isRead: true });

const addReadPropertyByISBN = (books, ISBN) => {
  const index = R.findIndex(R.propEq('ISBN', ISBN))(books);
  return R.adjust(addReadPropToObj, index, books);
};

export const getBooks = createSelector(
  [getRawBooks, getBooksRead],
  (rawBooks, ISBNsOfBooksIRead) =>
    R.reduce(
      addReadPropertyByISBN,
      rawBooks,
      ISBNsOfBooksIRead,
    ),
  );

// export const getMyBooks = createSelector(
//   [getRawBooks, getBooksRead],
//   (rawBooks, booksRead) =>
//     R.innerJoin(
//       ({ ISBN: bookISBN }, { ISBN: readISBN }) => bookISBN === readISBN,
//       rawBooks,
//       booksRead,
//     ),
//   );
