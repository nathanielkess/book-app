import R from 'ramda';
import USERS from './users.types';

const initialState = [];

export default(state = initialState, { type, payload }) => {
  switch (type) {
    case USERS.ADD_OR_REMOVED :
      return [
        ...state,
        payload,
      ];
    case USERS.EDITED :
      return R.compose(
        R.adjust((obj) => {
          const newObj = {
            ...obj,
            ...payload,
          };
          return newObj;
        }, R.__, state),
        R.findIndex(R.propEq('uid', R.prop('uid', payload))),
      )(state);

    default:
      return state;
  }
};
