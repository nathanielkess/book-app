import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const CurrentUser = ({
  name,
  photoURL,
  onSignOut,
}) =>
  <div className="currentUser">
    <img alt={name} src={photoURL} />
    <div className="details">
      <p>{ name }</p>
      <Button onClick={onSignOut}>Sign Out</Button>
    </div>
  </div>;

CurrentUser.propTypes = {
  name: PropTypes.string,
  photoURL: PropTypes.string,
  onSignOut: PropTypes.func,
};

export default CurrentUser;
