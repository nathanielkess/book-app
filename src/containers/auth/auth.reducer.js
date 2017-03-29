import AUTH from './auth.types';

const initialState = {
  status: 'ANONYMOUS',
  email: null,
  displayName: null,
  photoURL: null,
  uid: null,
};

export default(state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH.SUCCEEDED :
      return {
        ...state,
        ...payload.user,
        status: 'SIGNED_IN',
      };
    default:
      return state;
  }
};
