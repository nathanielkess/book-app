import { eventChannel } from 'redux-saga';
import { auth, googleAuthProvider, database } from './firebase';

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

function transformBooks(bookData) {
  if (bookData.isbns.length === 0) {
    bookData.isbns = [{}];
  }
  return { author: bookData.author, title: bookData.title, ISBN: bookData.isbns[0].isbn13 };
}

const hasISBN = book => (book.ISBN);

function getRemoteBooks() {
  return fetch('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=8742500acd2b41a9a1143b62c7e557c9')
  .then(data => data.json())
  .then(response => response.results.map(transformBooks).filter(hasISBN));
}

export default {
  getRemoteBooks,
  userDetailsChangedChannel,
  createUsersEventChannel,
  signInWithGoogle,
  signOut,
};
