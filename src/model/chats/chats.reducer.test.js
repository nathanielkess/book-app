import { chatInitState, chat } from './chats.reducer';
import CHATS from './chats.types';

describe('Chats reducer', () => {
  it('should add the user to the "with" property', () => {
    const payLoadItem = {
      displayName: 'Jim Jam',
      photoURL: 'someUrl.png',
      uid: '12345',
    };
    expect(chat(chatInitState, {
      type: CHATS.CHATTING_WITH,
      payload: payLoadItem,
    })).toEqual({
      ...chatInitState,
      with: { ...payLoadItem },
    });
  });

  it('should set the chat id', () => {
    const payLoadItem = '123456';
    expect(chat(chatInitState, {
      type: CHATS.RECIEVED_CHAT_ID,
      payload: payLoadItem,
    })).toEqual({
      ...chatInitState,
      chatId: payLoadItem,
    });
  });
});
