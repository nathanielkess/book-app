import React, { PropTypes } from 'react';


const Users = ({
  users = [],
}) =>
  <ul className="usersList">
    {
      users.map(user => <li>{user}</li>)
    }
    <li>Some User</li>
    <li>Some User</li>
    <li>Some User</li>
  </ul>;

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
