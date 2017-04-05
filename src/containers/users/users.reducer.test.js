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
      type: USERS.ADD_OR_REMOVED,
      payload: payloadItem,
    })).toEqual([
      payloadItem,
    ]);
  });

  it('should update a user when their details change', () => {
    const updatedUserDetails = {
      displayName: 'Nathaniel Kessler',
      email: 'nathaniel@nathanielkessler.com',
      isOnline: false,
      photoURL: 'https://lh3.googleusercontent.com/-u6dcHw27_vA/AAAAAAAAAAI/AAAAAAAACZA/s4RNzKVjOT0/photo.jpg',
      uid: 'Go892cn04VSJTR390WKmp9AWqIl1',
    };
    const users = [
      { displayName: 'Bob', isOnline: false, uid: 1 },
      { displayName: 'Jim', isOnline: true, uid: 'Go892cn04VSJTR390WKmp9AWqIl1' },
      { displayName: 'Sarah', isOnline: true, uid: 3 },
    ];
    const expectedUsers = [
      { displayName: 'Bob', isOnline: false, uid: 1 },
      { ...updatedUserDetails },
      { displayName: 'Sarah', isOnline: true, uid: 3 },
    ];

    expect(reducer(users, {
      type: USERS.EDITED,
      payload: updatedUserDetails,
    })).toEqual(expectedUsers);
  });
});
