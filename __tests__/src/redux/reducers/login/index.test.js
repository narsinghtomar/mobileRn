/**
 * Login Reducer
 */

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SAVE_TOKEN_REQUEST,
} from '../../../../../src/redux/actions/login';
import loginReducer from '../../../../../src/redux/reducers/login';

const initialState = {
  apiCallError: null,
  loginInfo: null,
};

describe('loginUser Action', () => {
  test('dispatch type[""] to get initialState', () => {
    const action = {type: '', payload: null};
    expect(loginReducer(initialState, action)).toEqual({
      ...initialState,
    });
  });

  describe('LOGIN_USER_REQUEST', () => {
    test('dispatch type[LOGIN_USER_REQUEST] to get request state', () => {
      const action = {type: LOGIN_USER_REQUEST, payload: {}};

      expect(loginReducer(initialState, action)).toEqual({
        ...initialState,
        isFatching: true,
        loginSuccess: false,
        loginFail: false,
        loginErrorData: null,
      });
    });
  });

  describe('LOGIN_USER_SUCCESS', () => {
    test('dispatch type[LOGIN_USER_SUCCESS] to get request state', () => {
      const action = {
        type: LOGIN_USER_SUCCESS,
        payload: {},
      };
      expect(loginReducer(initialState, action)).toEqual({
        ...initialState,
        isFatching: false,
        loginSuccess: true,
        loginFail: false,
        loginErrorData: null,
        loginInfo: action?.payload?.loginInfo,
        accessToken: action?.payload?.loginInfo,
        messageCode: action?.payload?.loginInfo?.message,
        resStatus: true,
      });
    });
  });

  describe('LOGIN_USER_ERROR', () => {
    test('dispatch type[LOGIN_USER_ERROR] to get request state', () => {
      const action = {type: LOGIN_USER_ERROR, payload: {}};
      expect(loginReducer(initialState, action)).toEqual({
        ...initialState,
        isFatching: false,
        loginSuccess: false,
        loginFail: true,
        loginErrorData: action?.payload?.error,
      });
    });
  });

  describe('SAVE_TOKEN_REQUEST', () => {
    test('dispatch type[SAVE_TOKEN_REQUEST] to get request state', () => {
      const action = {type: SAVE_TOKEN_REQUEST, payload: {}};
      expect(loginReducer(initialState, action)).toEqual({
        ...initialState,
        isFatching: false,
        loginSuccess: false,
        loginFail: false,
        loginErrorData: null,
        accessToken: action?.payload?.token,
      });
    });
  });
});
