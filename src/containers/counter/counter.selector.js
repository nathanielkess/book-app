import R from 'ramda';
import { createStructuredSelector } from 'reselect';

export default createStructuredSelector({
  count: R.prop('counter'),
});
