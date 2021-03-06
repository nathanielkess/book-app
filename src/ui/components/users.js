import React from 'react';
import PropTypes from 'prop-types';
import User from './user';

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
          <User isOnline={isOnline} displayName={displayName} />
        </li>)
    }
  </ul>;

Users.propTypes = {
  users: PropTypes.array,
};

export default Users;
