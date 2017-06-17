import { createAction } from '../../utils/action-helper';
import CHATS from './chats.types';

export const onSendMessage = message => createAction(CHATS.MESSAGE_SENT, message);
export const onStartChat = user => createAction(CHATS.CHATTING_WITH, { ...user });
