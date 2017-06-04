import SEARCH from './book-search.types';

export const search = (state = null, { type, payload }) => {
  switch (type) {
    case SEARCH.TERM_CHANGED :
      return payload;
    default:
      return state;
  }
};
