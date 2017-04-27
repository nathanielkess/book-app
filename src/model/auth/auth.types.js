import { prefixActionTypes } from '../../utils/action-helper';

const AUTH = prefixActionTypes('AUTH', [
  'ATTEMPTING',
  'SUCCEEDED',
  'LOGOUT_SUCCEEDED',
]);

export default AUTH;
