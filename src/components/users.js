import React, { PropTypes } from 'react';

const Users = ({
  users = [],
}) =>
  <ul className="usersList">
    {
      users.map(({
        displayName,
        uid,
        isOnline,
      }) =>
        <li key={uid}>
          <span style={{ paddingRight: 5 }}>{displayName}</span>
          {
            isOnline
            ? <a href="#onlineUser">[Online]</a>
            : <span> [Offline]</span>
          }
        </li>)
    }
  </ul>;

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
