import { eventChannel } from 'redux-saga';
import { auth, googleAuthProvider, database } from './firebase';
import bookData from './../mock/books-data';

const userRef = database.ref('users');

function* signInWithGoogle() {
  const user = yield auth.signInWithPopup(googleAuthProvider);
  return user;
}

function* signOut(key) {
  try {
    yield userRef.child(key).update({ isOnline: false });
    yield auth.signOut();
    return true;
  } catch (e) {
    console.log('fail to login', e);
    return false;
  }
}

function createUsersEventChannel() {
  const listener = eventChannel(
    (emit) => {
      userRef.on(
        'child_added',
        data => emit(data.val()),
      );
      return () => userRef.off(listener);
    },
  );
  return listener;
}

function userDetailsChangedChannel() {
  const listener = eventChannel(
    (emit) => {
      userRef.on('child_changed',
        snap => emit(snap.val()),
      );
      return () => userRef.off(listener);
    },
  );
  return listener;
}

function getRemoteBooks() {
  return new Promise((resolve) => {
    window.setTimeout(
      () => {
        resolve(bookData);
      }, 100);
  });
}

export default {
  getRemoteBooks,
  userDetailsChangedChannel,
  createUsersEventChannel,
  signInWithGoogle,
  signOut,
};
