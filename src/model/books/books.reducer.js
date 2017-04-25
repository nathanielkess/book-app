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
