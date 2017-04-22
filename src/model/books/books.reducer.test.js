import bookData from './../../mock/books-data';
import booksReducer from './books.reducer';
import BOOKS from './books.types';

describe('Books reducer', () => {
  it('should update the list of books', () => {
    const payLoadItem = bookData;
    expect(booksReducer([], {
      type: BOOKS.FETCHED,
      payload: payLoadItem,
    })).toEqual(
      payLoadItem,
    );
  });
});
