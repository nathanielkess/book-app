import React, { PropTypes } from 'react';
import { buttonStyles } from './css';

const Button = ({ children, onClick }) =>
  <button style={{ ...buttonStyles }} onClick={onClick}>
    { children }
  </button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Button;
