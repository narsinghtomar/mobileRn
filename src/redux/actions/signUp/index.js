/**
 * SignUp Action
 */
export const SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR';

/**
 *
 * @param {*} data
 * @returns
 */
export const signUpUser = data => {
  return {
    type: SIGNUP_USER_REQUEST,
    payload: {data},
  };
};
