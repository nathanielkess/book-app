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
});
