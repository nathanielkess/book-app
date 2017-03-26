import { prefixActionTypes } from '../../utils/action-helper';

const LOGIN = prefixActionTypes('LOGIN', [
  'ATTEMPTING',
]);

export default LOGIN;
