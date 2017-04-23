import { createAction } from '../../utils/action-helper';
import BOOKS from './books.types';

export const onFetchBooks = books => createAction(BOOKS.FETCHED, books);
