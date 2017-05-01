import bookData from './../../mock/books-data';
import { books, booksRead } from './books.reducer';
import BOOKS from './books.types';

describe('Books reducer', () => {
  it('should update the list of books', () => {
    const payLoadItem = bookData;
    expect(books([], {
      type: BOOKS.FETCHED,
      payload: payLoadItem,
    })).toEqual(
      payLoadItem,
    );
  });
});

describe('BooksRead reducer', () => {
  it('should add to the list of books that Ive read', () => {
    const payloadISBN = '123';
    expect(booksRead([], {
      type: BOOKS.BOOKS_I_READ_CHANGED,
      payload: payloadISBN,
    })).toEqual(
      [payloadISBN],
    );
  });
});
