import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

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
        Chatting with Nathaniel
      </header>
      <div className="messages">
        <div className="container">
          <div className="message in">
            hey!
          </div>
          <div className="message out">
            hey!
          </div>
          <div className="message in">
            hey!
          </div>
          <div className="message out">
            hey!
          </div>
          <div className="message in">
            hey!
          </div>
          <div className="message out">
            hey!
          </div>
        </div>
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
};

export default ChatBox;
