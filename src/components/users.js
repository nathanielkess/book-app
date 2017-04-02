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
          {displayName}
          {isOnline && <span> [Online]</span> }
        </li>)
    }
  </ul>;

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
