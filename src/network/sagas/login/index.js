/**
 * Login Saga
 */
import {takeEvery, put, call} from 'redux-saga/effects';
import {API_RESPONSE_SUCCESS} from '../../../utils/constants/apiCodes';
import {LOGIN_URL} from '../../../utils/constants/apiEndpoints';
import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from '../../../redux/actions/login';
import {makeNetworkCall} from '../..';

/**
 * LoginUser
 * @param {*} action
 * @returns
 */
export function loginUser(action) {
  const {data} = action?.payload;
  const {loginData, headers} = data || {};
  const config = {
    headers: headers,
    method: 'POST',
    url: LOGIN_URL,
    data: loginData,
  };
  return makeNetworkCall(config);
}

/**
 * HandleLoginUser
 * @param {*} action
 */
export function* handleLoginUser(action) {
  try {
    const response = yield call(loginUser, action);
    const {data = {}} = response || {};
    const {message = ''} = data || {};
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put({type: LOGIN_USER_SUCCESS, payload: {loginInfo: data}});
    } else {
      yield put({type: LOGIN_USER_ERROR, payload: {error: message}});
    }
  } catch (error) {
    yield put({type: LOGIN_USER_ERROR});
  }
}

// Login User watcher saga
export function* loginUserSaga() {
  yield takeEvery(LOGIN_USER_REQUEST, handleLoginUser);
}
