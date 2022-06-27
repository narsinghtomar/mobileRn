/**
 * SignUP Reducer
 */
import * as globals from '../globals';
import defaultAction from '../../actions';
import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
} from '../../actions/signUp';

const initialState = {
  ...globals,
  apiCallError: null,
  signUpInfo: null,
};

const signUpReducer = (state = initialState, action = defaultAction) => {
  const {type, payload} = action;
  switch (type) {
    case SIGNUP_USER_REQUEST:
      return {
        ...state,
        isFatching: true,
        signUpSuccess: false,
        signUpFail: false,
        signUpErrorData: null,
      };
    case SIGNUP_USER_SUCCESS: {
      return {
        ...state,
        isFatching: false,
        signUpSuccess: true,
        signUpFail: false,
        signUpErrorData: null,
        signUpInfo: payload?.signUpInfo,
        messageCode: payload?.signUpInfo?.message,
      };
    }
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        isFatching: false,
        signUpSuccess: false,
        signUpFail: true,
        signUpErrorData: payload?.error,
      };

    default:
      return state;
  }
};

export default signUpReducer;
