import { createSelector } from 'reselect';
import { getAuthStatus, getTheUser } from '../raw-selectors';

export const getIsLoggedIn = createSelector(
  [getAuthStatus],
  status => status === 'SIGNED_IN',
);

export const getCurrentUser = createSelector(
  [getTheUser],
  user => user,
);
