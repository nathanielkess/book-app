import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BookThumb from './../components/book-thumb';
import Button from './../components/button';
import { getBooksRead, getUid } from './../../model/raw-selectors';
import * as bookDispatchers from './../../model/books/books.actions';
import * as chatsDispatchers from './../../model/chats/chats.actions';

const mapStateToProps = createStructuredSelector({
  books: getBooksRead,
  currentUserId: getUid,
});

const dispatchers = {
  ...bookDispatchers,
  ...chatsDispatchers,
};

export default connect(mapStateToProps, dispatchers)(
  ({
    currentUserId,
    books,
    onSelectBookNetwork,
    onStartChat,
   }) =>
     <ul className="booksReadList">
       { books.map(book =>
         <li key={book.ISBN}>
           <button
             role="button"
             onClick={() => {
               onSelectBookNetwork(book);
             }}
           >
             <BookThumb {...book} />
           </button>
           <ul className="readBy">
             {
              book.users
              .filter(user => user.uid !== currentUserId)
              .map(user =>
                <li key={user.uid}>
                  <Button onClick={() => { onStartChat(user); }}>
                    { user.displayName }
                  </Button>
                </li>,
              )}
           </ul>
         </li>,
      )}
     </ul>,
  );
