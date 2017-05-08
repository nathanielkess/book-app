import { prefixActionTypes } from '../../utils/action-helper';

const SEARCH = prefixActionTypes('SEARCH', [
  'INITIATED',
  'PENDING',
  'RECEIVED'
]);

export default SEARCH;
