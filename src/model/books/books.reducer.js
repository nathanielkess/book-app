import BOOKS from './books.types';

export const books = (state = [], { type, payload }) => {
  switch (type) {
    case BOOKS.FETCHED :
      return payload;
    default:
      return state;
  }
};

export const booksRead = (state = [], { type, payload }) => {
  switch (type) {
    case BOOKS.BOOKS_I_READ_CHANGED :
      return [
        ...state,
        payload,
      ];
    default:
      return state;
  }
};

export const booksSearch = (state = null, { type, payload }) => {
  switch (type) {
    case BOOKS.SEARCH_TERM_CHANGED :
      return payload;
    default:
      return state;
  }
};
