import React from 'react';
import PropTypes from 'prop-types';

const ChatMessages = ({
  messages,
  myUid,
}) =>
  <div className="container">
    { messages.map((message, idx) => {
      const key = idx;
      const cssClass = (message.uid === myUid) ? 'message out' : 'message in';
      return (
        <div key={key} className={cssClass}>
          { message.message }
        </div>
      );
    },
    )}
  </div>;

ChatMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  myUid: PropTypes.string.isRequired,
};

export default ChatMessages;
