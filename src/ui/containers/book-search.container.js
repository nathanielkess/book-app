import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, renameProp } from 'recompose';
import SearchBar from './../components/search-bar';
import * as mapDispatchToProps from './../../model/books/books.actions';

const mapStateToProps = createStructuredSelector({
  waterMarkText: () => 'search',
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  renameProp('onBookSearchChange', 'onChange'),
  renameProp('onBookSearch', 'onSearch'),
)(SearchBar);
