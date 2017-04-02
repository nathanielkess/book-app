import React, { PropTypes } from 'react';

const Users = ({
  users = [],
}) =>
  <ul className="usersList">
    {
      users.map(({
        displayName,
        uid,
      }) => <li key={uid}>{displayName}</li>)
    }
  </ul>;

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
