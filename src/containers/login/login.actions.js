import { createAction } from '../../utils/action-helper';
import LOGIN from './login.types';

export const onIncrement = () => createAction(LOGIN.ATTEMPTING);
