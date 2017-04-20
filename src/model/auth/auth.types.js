import { prefixActionTypes } from '../../utils/action-helper';

const AUTH = prefixActionTypes('AUTH', [
  'ATTEMPTING',
  'SUCCEEDED',
  'LOGGED_OUT',
]);

export default AUTH;
