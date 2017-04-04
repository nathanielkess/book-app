import reducer from './users.reducer';
import USERS from './users.types';
import AUTH from '../auth/auth.types';

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

  it('should set the user to offline when the user logges out', () => {
    const users = [
      { displayName: 'Bob', isOnline: true, uid: 1 },
      { displayName: 'Jim', isOnline: true, uid: 2 },
      { displayName: 'Sarah', isOnline: true, uid: 3 },
    ];
    const expectedUsers = [
      { displayName: 'Bob', isOnline: false, uid: 1 },
      { displayName: 'Jim', isOnline: true, uid: 2 },
      { displayName: 'Sarah', isOnline: true, uid: 3 },
    ];

    expect(reducer(users, {
      type: AUTH.LOGGED_OUT,
      payload: 1,
    })).toEqual(expectedUsers);
  });
});
