import BOOKS from './books.types';

// const _cleanBooksRead = (payload) => {
//   const { users, ...bookDetails } = payload;
//   const cleanedUsers = users.map((user) => {
//     const { booksRead, ...userDetails } = user;
//     return userDetails;
//   });
//   return {
//     ...bookDetails,
//     users: cleanedUsers,
//   };
// };

export const books = (state = [], { type, payload }) => {
  switch (type) {
    case BOOKS.FETCHED :
      return payload;
    default:
      return state;
  }
};

export const booksRead = (state = [], { type, payload }) => {
  switch (type) {
    case BOOKS.BOOKS_I_READ_CHANGED :
      return [
        ...state,
        payload,
        // _cleanBooksRead(payload),
      ];
    default:
      return state;
  }
};

export const booksSearch = (state = null, { type, payload }) => {
  switch (type) {
    case BOOKS.SEARCH_TERM_CHANGED :
      return payload;
    default:
      return state;
  }
};

export const bookNetworkDetails = (state = null, { type, payload }) => {
  switch (type) {
    case BOOKS.NETWORK_DETAILS_RECIEVED :
      return payload;
    default:
      return state;
  }
};
