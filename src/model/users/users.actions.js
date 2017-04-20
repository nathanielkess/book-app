import { createAction } from '../../utils/action-helper';
import USERS from './users.types';

export const onUsersAddOrRemoved = user => createAction(USERS.ADD_OR_REMOVED, { ...user });
export const onUsersEdited = user => createAction(USERS.EDITED, { ...user });
