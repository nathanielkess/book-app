
const initialState = {
  status: 'ANONYMOUS',
  email: null,
  displayName: null,
  photoURL: null,
  uid: null,
};

export default(state = initialState, { type, payload }) => {
  return state;
};
