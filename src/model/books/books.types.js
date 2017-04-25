import { prefixActionTypes } from '../../utils/action-helper';

const BOOKS = prefixActionTypes('BOOKS', [
  'FETCHED',
  'I_READ_A_BOOK',
  'BOOKS_I_READ_CHANGED',
]);

export default BOOKS;
