import { prefixActionTypes } from '../../utils/action-helper';

const AUTH = prefixActionTypes('AUTH', [
  'ATTEMPTING',
  'SUCCEEDED',
]);

export default AUTH;
