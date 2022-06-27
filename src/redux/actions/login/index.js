/**
 * Login Action
 */
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const SAVE_TOKEN_REQUEST = 'SAVE_TOKEN_REQUEST';

/**
 *
 * @param {*} data
 * @returns
 */
export const loginUser = data => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {data},
  };
};
