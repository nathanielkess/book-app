import { createSelector } from 'reselect';
import { getAuthStatus } from '../raw-selectors';

export const getIsLoggedIn = createSelector(
  [getAuthStatus],
  status => status === 'SIGNED_IN',
);
