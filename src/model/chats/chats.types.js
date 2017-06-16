import { prefixActionTypes } from '../../utils/action-helper';

const CHATS = prefixActionTypes('CHATS', [
  'MESSAGE_SENT',
]);

export default CHATS;
