/**
 * Login Reducer
 */
import * as globals from '../globals';
import defaultAction from '../../actions';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SAVE_TOKEN_REQUEST,
} from '../../actions/login';

const initialState = {
  ...globals,
  apiCallError: null,
  loginInfo: null,
};

const loginReducer = (state = initialState, action = defaultAction) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isFatching: true,
        loginSuccess: false,
        loginFail: false,
        loginErrorData: null,
      };
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isFatching: false,
        loginSuccess: true,
        loginFail: false,
        loginErrorData: null,
        loginInfo: payload?.loginInfo,
        accessToken: payload?.loginInfo,
        messageCode: payload?.loginInfo?.message,
        resStatus: true,
      };
    }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isFatching: false,
        loginSuccess: false,
        loginFail: true,
        loginErrorData: payload?.error,
      };

    case SAVE_TOKEN_REQUEST:
      return {
        ...state,
        isFatching: false,
        loginSuccess: false,
        loginFail: false,
        loginErrorData: null,
        accessToken: payload?.token,
      };

    default:
      return state;
  }
};

export default loginReducer;
