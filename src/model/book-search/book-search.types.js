import { prefixActionTypes } from '../../utils/action-helper';

const SEARCH = prefixActionTypes('SEARCH', [
  'TERM_CHANGED',
  'SEARCH_ATTEMPTED',
  'PENDING',
  'RECEIVED'
]);

export default SEARCH;
