import React, { PropTypes } from 'react';

const User = ({ isOnline, displayName }) =>
  <div>
    <span style={{ paddingRight: 5 }}>{displayName}</span>
    {
      isOnline
      ? <a href="#onlineUser">[Online]</a>
      : <span> [Offline]</span>
    }
  </div>;

User.propTypes = {
  isOnline: PropTypes.bool,
  displayName: PropTypes.string,
};

export default User;
