import { prefixActionTypes } from '../../utils/action-helper';

const COUNTER = prefixActionTypes('Counter', [
  'INCREMENTED',
  'DECREMENTED',
]);

export default COUNTER;
