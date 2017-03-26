import React, { PropTypes } from 'react';

const Counter = ({ count, onIncrement, onDecrement }) =>
  <div className="Loading">
    <p>the count is { count }.</p>
    <button onClick={onIncrement}>Up</button>
    <button onClick={onDecrement}>Down</button>
  </div>;

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
};

export default Counter;
