import { prefixActionTypes } from '../../utils/action-helper';

const USERS = prefixActionTypes('USERS', [
  'UPDATED',
  'CREATED',
]);

export default USERS;
