import R from 'ramda';

// Auth
export const getAuthStatus = R.path(['auth', 'isOnline']);
export const getName = R.path(['auth', 'displayName']);
export const getEmail = R.path(['auth', 'email']);
export const getPhotoURL = R.path(['auth', 'photoURL']);
export const getUid = R.path(['auth', 'uid']);
export const getTheUser = R.prop('auth');

// Users
export const getUsers = R.prop('users');

// Books
export const getBooks = R.prop('books');