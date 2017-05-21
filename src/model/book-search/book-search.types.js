import { prefixActionTypes } from '../../utils/action-helper';

const SEARCH = prefixActionTypes('SEARCH', [
  'TERM_CHANGED',
  'PENDING',
  'RECEIVED'
]);

export default SEARCH;
