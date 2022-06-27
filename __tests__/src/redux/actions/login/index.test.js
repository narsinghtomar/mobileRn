/**
 * Login Action
 */

import {
  LOGIN_USER_REQUEST,
  loginUser,
} from '../../../../../src/redux/actions/login';

describe('Login Actions', () => {
  test('dispatch action [loginUser]', () => {
    const data = 'test data';
    expect(loginUser(data)).toEqual({
      type: LOGIN_USER_REQUEST,
      payload: {data},
    });
  });
});
