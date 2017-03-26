import React, { PropTypes } from 'react';
import Button from './button';

const Counter = ({ count, onIncrement, onDecrement }) =>
  <div className="Loading">
    <p>the count is { count }.</p>
    <Button onClick={onIncrement}>Up</Button>
    <Button onClick={onDecrement}>Down</Button>
  </div>;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
