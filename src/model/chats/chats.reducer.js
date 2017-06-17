import CHATS from './chats.types';

export const chatInitState = {
  with: null,
  messages: [],
};

export const chat = (state = chatInitState, { type, payload }) => {
  switch (type) {
    case CHATS.CHATTING_WITH :
      return {
        ...state,
        with: { ...payload },
      };
    default:
      return state;
  }
};
