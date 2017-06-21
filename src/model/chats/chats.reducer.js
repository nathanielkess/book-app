import CHATS from './chats.types';

export const chatInitState = {
  with: null,
  messages: [],
  chatId: null,
};

export const chat = (state = chatInitState, { type, payload }) => {
  switch (type) {
    case CHATS.CHATTING_WITH :
      return {
        ...state,
        with: { ...payload },
      };
    case CHATS.RECIEVED_CHAT_ID :
      return {
        ...state,
        chatId: payload,
      };
    default:
      return state;
  }
};
