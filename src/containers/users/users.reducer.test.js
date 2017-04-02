import reducer from './users.reducer';
import USERS from './users.types';

describe('Users reducer', () => {
  it('should add a user when the list is updated', () => {
    const payloadItem = {
      displayName: 'Mary Smith',
      isOnline: true,
      uid: '1',
    };

    expect(reducer([], {
      type: USERS.UPDATED,
      payload: payloadItem,
    })).toEqual([
      payloadItem,
    ]);
  });
});
