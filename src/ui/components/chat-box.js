import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import ChatMessages from './chat-messages';

class ChatBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(inputValue) {
    this.setState({
      inputValue,
    });
  }

  handleSubmit() {
    if (this.state.inputValue.length < 1) return;
    const { onSendMessage } = this.props;
    onSendMessage(this.state.inputValue);
    this.setState({
      inputValue: '',
    });
  }

  render() {
    return (<div className="chatBox">
      <header>
        Chatting with { this.props.chattingWith.displayName }
      </header>
      <div className="messages">
        <ChatMessages myUid={this.props.myUid} messages={this.props.messages} />
      </div>
      <div className="form">
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleChange(e.target.value)}
        />
        <Button onClick={this.handleSubmit}>Send</Button>
      </div>
    </div>);
  }
}

ChatBox.propTypes = {
  onSendMessage: PropTypes.func,
  chattingWith: PropTypes.object,
  messages: PropTypes.array,
  myUid: PropTypes.string,
};

export default ChatBox;
