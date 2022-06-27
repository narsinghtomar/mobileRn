/**
 * Article List Saga
 */
import {takeEvery, put, call} from 'redux-saga/effects';
import {API_RESPONSE_SUCCESS} from '../../../utils/constants/apiCodes';
import {FETCH_CATEGORY} from '../../../utils/constants/apiEndpoints';
import {
  FETCH_NYTIMES_REQUEST,
  FETCH_NYTIMES_SUCCESS,
  FETCH_NYTIMES_ERROR,
} from '../../../redux/actions/articleList';
import {makeNetworkCall} from '../..';

/**
 * fetchNyTimesData
 * @param {*} action
 * @returns
 */
export function fetchNyTimesData(action) {
  const {data} = action?.payload;
  const {categoryData, headers} = data || {};
  const {category, apiKey} = categoryData || {};
  const url = FETCH_CATEGORY + `/${category}.json?api-key=${apiKey}`;
  const config = {
    headers: headers,
    method: 'GET',
    url: url,
  };
  return makeNetworkCall(config);
}

/**
 * handleFetchNyTimesData
 * @param {*} action
 */
export function* handleFetchNyTimesData(action) {
  try {
    const response = yield call(fetchNyTimesData, action);
    const {data = {}} = response || {};
    const {message = ''} = data || {};
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put({type: FETCH_NYTIMES_SUCCESS, payload: {nyTimesInfo: data}});
    } else {
      yield put({type: FETCH_NYTIMES_ERROR, payload: {error: message}});
    }
  } catch (error) {
    yield put({type: FETCH_NYTIMES_ERROR});
  }
}

// Article List watcher saga
export function* articleListSaga() {
  yield takeEvery(FETCH_NYTIMES_REQUEST, handleFetchNyTimesData);
}
