import { createAction } from '../../utils/action-helper';
import COUNTER from './counter.types';

export const onIncrement = () => createAction(COUNTER.INCREMENTED);
export const onDecrement = () => createAction(COUNTER.DECREMENTED);
