import SEARCH from './book-search.types';

export const search = (state = null, { type, payload }) => {
  switch (type) {
    case SEARCH.INITIATED :
      return payload;
    default:
      return state;
  }
};
