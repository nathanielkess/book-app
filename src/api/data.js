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
  return {
    author: bookData.author,
    title: bookData.title,
    ISBN: bookData.primary_isbn13,
    coverImagePath: bookData.book_image,
  };
}

const hasISBN = book => (book.ISBN);

function getRemoteBooks() {
  const youngAdultFiction = 10;
  const childrenSeries = 9;
  return fetch('https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=8742500acd2b41a9a1143b62c7e557c9')
  .then(data => data.json())
  .then((json) => {
    const youngAdultBooks = json.results.lists[youngAdultFiction].books;
    const childrenBooks = json.results.lists[childrenSeries].books;
    return youngAdultBooks.concat(childrenBooks);
  })
  .then(response => response.map(transformBooks).filter(hasISBN));
}

function getSearchRemoteBooks(searchTerm) {
  return new Promise((resolve) => {
     window.setTimeout(
       () => {
         resolve(bookData);
       }, 100);
   });
}

export default {
  getRemoteBooks,
  getSearchRemoteBooks,
  userDetailsChangedChannel,
  createUsersEventChannel,
  signInWithGoogle,
  signOut,
};
