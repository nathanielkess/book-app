import { prefixActionTypes } from '../../utils/action-helper';

const USERS = prefixActionTypes('USERS', [
  'ADD_OR_REMOVED',
  'EDITED',
]);

export default USERS;
