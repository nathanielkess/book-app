import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ChatBox = () =>
  <div className="chatBox">
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
      <input type="text" />
      <Button>Send</Button>
    </div>
  </div>;

ChatBox.propTypes = {
};

export default ChatBox;
