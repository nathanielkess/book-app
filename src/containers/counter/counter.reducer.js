import COUNTER from './counter.types';

const initialState = 0;

export default(state = initialState, { type }) => {
  switch (type) {
    case COUNTER.INCREMENTED:
      return state + 1;
    case COUNTER.DECREMENTED:
      return state - 1;
    default:
      return state;
  }
};
