import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BookThumb from './../components/book-thumb';
import { getBooksRead, getUid } from './../../model/raw-selectors';
import * as mapDistpatchToProps from './../../model/books/books.actions';

const mapStateToProps = createStructuredSelector({
  books: getBooksRead,
  currentUserId: getUid,
});

export default connect(mapStateToProps, mapDistpatchToProps)(
  ({
    currentUserId,
    books,
    onSelectBookNetwork,
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
                  { user.displayName }
                </li>,
              )}
           </ul>
         </li>,
      )}
     </ul>,
  );
