import bookData from './../../mock/books-data';
import { books, booksRead, bookNetworkDetails } from './books.reducer';
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

describe('udpateStoreWhenBooksIReadAdded()', () => {
  it('should add to the list of books that Ive read', () => {
    // const payloadISBN = '123';
    const bookPayload = {
      ISBN: '12345',
      author: 'Bobby Sue',
      coverImagePath: 'path/to/image.jpg',
      title: 'Everybody poops',
      userThatReadThis: [
        {
          displayName: 'Nathaniel Kessler',
          email: 'nathaniel.kessler@rangle.io',
          isOnline: true,
          photoURL: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
          uid: '8QdphXKQkaa9ML4bI7fexa2qO6W2',
        },
      ],
    };

    expect(booksRead([], {
      type: BOOKS.BOOKS_I_READ_CHANGED,
      payload: bookPayload,
    })).toEqual(
      [bookPayload],
    );
  });
});

describe('bookNetwork reducer', () => {
  it('should set a current book (to see its network details)', () => {
    const payload = null;

    expect(bookNetworkDetails(null, {
      type: BOOKS.NETWORK_DETAILS_RECIEVED,
      payload,
    })).toEqual(null);
  });
});
