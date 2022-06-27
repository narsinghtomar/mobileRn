/**
 * SignUp Saga
 */
import {takeEvery, put, call} from 'redux-saga/effects';
import {API_RESPONSE_SUCCESS} from '../../../utils/constants/apiCodes';
import {LOGIN_URL} from '../../../utils/constants/apiEndpoints';
import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
} from '../../../redux/actions/signUp';
import {makeNetworkCall} from '../..';

/**
 * signUpUser
 * @param {*} action
 * @returns
 */
export function signUpUser(action) {
  const {data} = action?.payload;
  const {signUpData, headers} = data || {};
  const config = {
    headers: headers,
    method: 'POST',
    url: LOGIN_URL,
    data: signUpData,
  };
  return makeNetworkCall(config);
}

/**
 * handleSignUpUser
 * @param {*} action
 */
export function* handleSignUpUser(action) {
  try {
    const response = yield call(signUpUser, action);
    const {data = {}} = response || {};
    const {message = ''} = data || {};
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put({type: SIGNUP_USER_SUCCESS, payload: {signUpInfo: data}});
    } else {
      yield put({type: SIGNUP_USER_ERROR, payload: {error: message}});
    }
  } catch (error) {
    yield put({type: SIGNUP_USER_ERROR});
  }
}

// SignUp User watcher saga
export function* signUpUserSaga() {
  yield takeEvery(SIGNUP_USER_REQUEST, handleSignUpUser);
}
