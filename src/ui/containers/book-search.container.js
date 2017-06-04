import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import { compose, lifecycle, renameProp } from 'recompose';
import SearchBar from './../components/search-bar';
// import data from './../../api/data';
import * as mapDispatchToProps from './../../model/book-search/book-search.actions';
// import { getAuthStatus } from './../../model/raw-selectors';
// import { getBooks } from './../../model/books/books.selectors';

const mapStateToProps = createStructuredSelector({
  waterMarkText: () => 'search',
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(SearchBar);

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   renameProp('onIReadABook', 'onIReadThis'),
//   lifecycle({
//     componentDidMount() {
//       const { onFetchBooks } = this.props;
//       data.getRemoteBooks().then((theBooks) => {
//         onFetchBooks(theBooks);
//       });
//     },
//   }),
// )(BookList);
