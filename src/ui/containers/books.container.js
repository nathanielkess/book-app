import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, lifecycle } from 'recompose';
import BookList from './../components/book-list';
import data from './../../api/data';
import * as mapDispatchToProps from './../../model/books/books.actions';
import { getBooks } from './../../model/raw-selectors';

const mapStateToProps = createStructuredSelector({
  books: getBooks,
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { onFetchBooks } = this.props;
      data.getRemoteBooks().then((theBooks) => {
        onFetchBooks(theBooks);
      });
    },
  }),
)(BookList);
