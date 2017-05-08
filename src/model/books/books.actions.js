import { createAction } from '../../utils/action-helper';
import BOOKS from './books.types';

export const onFetchBooks = books => createAction(BOOKS.FETCHED, books);
export const onFetchBooksIRead = books => createAction(BOOKS.BOOKS_I_READ_FETCHED, books);
export const onIReadABook = book => createAction(BOOKS.I_READ_A_BOOK, book);
export const onBooksIReadChanged = book => createAction(BOOKS.BOOKS_I_READ_CHANGED, book);

// Search
export const onBookSearchChange = searchText => createAction(BOOKS.SEARCH_TERM_CHANGED, searchText);
export const onBookSearch = () => createAction(BOOKS.SEARCH_ATTEMPTED);
