import { prefixActionTypes } from '../../utils/action-helper';

const BOOKS = prefixActionTypes('BOOKS', [
  'FETCHED',
]);

export default BOOKS;
