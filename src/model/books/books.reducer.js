import BOOKS from './books.types';

const initialState = [];

export default(state = initialState, { type, payload }) => {
  switch (type) {
    case BOOKS.FETCHED :
      return payload;
    default:
      return state;
  }
};
