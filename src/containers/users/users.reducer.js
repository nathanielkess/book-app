import USERS from './users.types';
import AUTH from '../auth/auth.types';

const initialState = [];

export default(state = initialState, { type, payload }) => {
  switch (type) {
    case USERS.UPDATED :
      return [
        ...state,
        payload,
      ];
    case AUTH.LOGGED_OUT :
      console.log('set user isOnline:false', payload);
      return state;
    default:
      return state;
  }
};
