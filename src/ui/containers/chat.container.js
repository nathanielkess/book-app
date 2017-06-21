import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, renderNothing, branch } from 'recompose';
import ChatBox from './../components/chat-box';
import * as mapDispatchToProps from './../../model/chats/chats.actions';
import { getChattingWith, getMessage, getUid } from './../../model/raw-selectors';

const mapStateToProps = createStructuredSelector({
  chattingWith: getChattingWith,
  messages: getMessage,
  myUid: getUid,
});

const showIfChatting = branch(
  ({ chattingWith }) => !R.path(['displayName'], chattingWith),
  renderNothing,
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  showIfChatting,
)(ChatBox);
