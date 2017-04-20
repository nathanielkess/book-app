import { createAction } from '../../utils/action-helper';
import AUTH from './auth.types';

export const onLoginAttempt = authType => createAction(AUTH.ATTEMPTING, { authType });
export const onLoginSuccess = user => createAction(AUTH.SUCCEEDED, { user });
export const onLogOutSuccess = () => createAction(AUTH.LOGGED_OUT);
