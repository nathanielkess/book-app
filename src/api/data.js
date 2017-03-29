import { auth, googleAuthProvider, database } from './firebase';

const userRef = database.ref('users');


function* signInWithGoogle() {
  const user = yield auth.signInWithPopup(googleAuthProvider);
  return user;
}

function* addUser(user) {
  yield userRef.child(user.uid).set(user);
}


export default {
  signInWithGoogle,
  addUser,
};
