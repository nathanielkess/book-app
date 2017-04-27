import AUTH from './auth.types';

const initialState = {
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
        // status: 'SIGNED_IN',
        isOnline: true,
      };
    case AUTH.LOGOUT_SUCCEEDED :
      return {
        // status: 'SIGNED_OUT',
        isOnline: false,
      };
    default:
      return state;
  }
};
