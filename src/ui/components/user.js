import React from 'react';
import PropTypes from 'prop-types';

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
