import bookData from './../../mock/books-data';
import { search } from './book-search.reducer';
import SEARCH from './book-search.types';

describe('Book Search reducer', () => {
  it('should add the search query to the reducer', () => {
    const payLoadItem = 'arry otter';
    expect(search(null, {
      type: SEARCH.INITIATED,
      payload: payLoadItem,
    })).toEqual(
      payLoadItem,
    );
  });
});
