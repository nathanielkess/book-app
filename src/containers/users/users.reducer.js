import USERS from './users.types';

const initialState = [];

export default(state = initialState, { type, payload }) => {
  switch (type) {
    case USERS.UPDATED :
      return [
        ...state,
        payload,
      ];
    default:
      return state;
  }
};
