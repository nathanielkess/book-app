import { eventChannel } from 'redux-saga';
import { auth, googleAuthProvider, database } from './firebase';

const userRef = database.ref('users');

function* signInWithGoogle() {
  const user = yield auth.signInWithPopup(googleAuthProvider);
  return user;
}

function* addUser(user) {
  yield userRef.child(user.uid).set(user);
}

function* signOut() {
  yield auth.signOut();
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

export default {
  createUsersEventChannel,
  signInWithGoogle,
  addUser,
  signOut,
};
