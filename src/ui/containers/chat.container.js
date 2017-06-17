import R from 'ramda';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, renderNothing, branch } from 'recompose';
import ChatBox from './../components/chat-box';
import * as mapDispatchToProps from './../../model/chats/chats.actions';
import { getChat } from './../../model/raw-selectors';

const mapStateToProps = createStructuredSelector({
  chat: getChat,
});

const showIfChatting = branch(
  ({ chat }) => !R.prop(['with'], chat),
  renderNothing,
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  showIfChatting,
)(ChatBox);
