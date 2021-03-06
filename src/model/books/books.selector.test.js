import { getBooks } from './books.selectors';

describe('getBooks() selector', () => {
  it('should return books with a property to determin if Ive read the book', () => {
    const state = {
      books: [{ ISBN: '123' }, { ISBN: '234' }, { ISBN: '345' }],
      booksRead: [{ ISBN: '345' }],
    };
    const expectation = [
      { ISBN: '123' },
      { ISBN: '234' },
      { ISBN: '345', isRead: true },
    ];

    expect(getBooks(state)).toEqual(
      expectation,
    );
  });
});

// describe('getMyBooks() selector', () => {
//   it('should only return books that i read', () => {
//     const state = {
//       books: [{ ISBN: '123' }, { ISBN: '234' }, { ISBN: '345' }],
//       booksRead: [{ ISBN: '345' }],
//     };
//     const expectation = [
//       { ISBN: '345' },
//     ];

//     expect(getMyBooks(state)).toEqual(expectation);
//   });
// });
