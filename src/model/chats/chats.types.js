import { prefixActionTypes } from '../../utils/action-helper';

const CHATS = prefixActionTypes('CHATS', [
  'MESSAGE_SENT',
  'CHATTING_WITH',
]);

export default CHATS;
