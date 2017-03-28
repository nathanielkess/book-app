import { createAction } from '../../utils/action-helper';
import LOGIN from './login.types';

export const onLoginAttempt = authType => createAction(LOGIN.ATTEMPTING, { authType });
