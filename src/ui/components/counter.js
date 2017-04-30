import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Counter = ({ count, onIncrement, onDecrement }) =>
  <div className="Loading">
    <p>
      <Button onClick={onIncrement}>Up</Button>&nbsp;
      <Button onClick={onDecrement}>Down</Button>&nbsp;
      the count is { count }.
    </p>
  </div>;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
