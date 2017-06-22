import { prefixActionTypes } from '../../utils/action-helper';

const CHATS = prefixActionTypes('CHATS', [
  'MESSAGE_SENT',
  'CHATTING_WITH',
  'RECIEVED_CHAT_ID',
  'RECIEVED_MESSAGE',
]);

export default CHATS;
