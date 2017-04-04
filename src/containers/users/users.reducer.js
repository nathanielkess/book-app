import R from 'ramda';
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

      const index = R.findIndex(R.propEq('uid', payload))(state);
      const updatedArray = R.adjust((obj) => {
        const newObj = {
          ...obj,
          isOnline: false,
        };
        console.log('New OBJ', newObj);
        return newObj;
      }, index, state);


      // console.log(index);
      // console.log(updatedArray);
      // // console.log('set user isOnline:false', payload);
      // console.log(state);
      return updatedArray;
    default:
      return state;
  }
};
