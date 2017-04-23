import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, lifecycle, renameProp } from 'recompose';
import BookList from './../components/book-list';
import data from './../../api/data';
import * as mapDispatchToProps from './../../model/books/books.actions';
import { getBooks } from './../../model/raw-selectors';
import { getIsLoggedIn } from './../../model/auth/auth.selector';

const mapStateToProps = createStructuredSelector({
  books: getBooks,
  showAuthenticatedStuff: getIsLoggedIn,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  renameProp('onIReadABook', 'onIReadThis'),
  lifecycle({
    componentDidMount() {
      const { onFetchBooks } = this.props;
      data.getRemoteBooks().then((theBooks) => {
        onFetchBooks(theBooks);
      });
    },
  }),
)(BookList);