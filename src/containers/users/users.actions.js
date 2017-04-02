import { createAction } from '../../utils/action-helper';
import USERS from './users.types';

export const onUsersUpdated = user => createAction(USERS.UPDATED, { ...user });
