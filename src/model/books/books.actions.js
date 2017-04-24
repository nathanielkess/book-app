import { createAction } from '../../utils/action-helper';
import BOOKS from './books.types';

export const onFetchBooks = books => createAction(BOOKS.FETCHED, books);
export const onIReadABook = book => createAction(BOOKS.I_READ_A_BOOK, book);
