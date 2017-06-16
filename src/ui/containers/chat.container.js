import { connect } from 'react-redux';
import ChatBox from './../components/chat-box';
import * as mapDispatchToProps from './../../model/chats/chats.actions';
// import { createStructuredSelector } from 'reselect';

// const mapStateToProps = createStructuredSelector({
//   books: getBooks,
//   showAuthenticatedStuff: getAuthStatus,
// });

export default connect(
  null,
  mapDispatchToProps,
)(ChatBox);
