import R from 'ramda';

// Auth
export const getAuthStatus = R.path(['auth', 'status']);
export const getName = R.path(['auth', 'displayName']);
export const getEmail = R.path(['auth', 'email']);
export const getPhotoURL = R.path(['auth', 'photoURL']);
export const getUid = R.path(['auth', 'uid']);

// Users
export const getUsers = R.prop('users');
