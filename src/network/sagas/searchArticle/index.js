/**
 * SearchArticles Saga
 */
import {takeEvery, put, call} from 'redux-saga/effects';
import {API_RESPONSE_SUCCESS} from '../../../utils/constants/apiCodes';
import {SEARCH_ARTICLES} from '../../../utils/constants/apiEndpoints';
import {
  SEARCH_ARTICLES_REQUEST,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_ERROR,
} from '../../../redux/actions/searchArticle';
import {makeNetworkCall} from '../..';

/**
 * searchArticles
 * @param {*} action
 * @returns
 */
export function searchArticles(action) {
  const {data} = action?.payload;
  const {searchData, headers} = data || {};
  const {category, searchQuary, apiKey, page} = searchData || {};
  let url = SEARCH_ARTICLES;
  url = category ? url + `q=${category}` : url;
  url = searchQuary ? url + `&fq=${searchQuary}` : url;
  url = apiKey ? url + `&api-key=${apiKey}` : url;
  url = url + `&page=${page}`;
  const config = {
    headers: headers,
    method: 'GET',
    url: url,
  };
  return makeNetworkCall(config);
}

/**
 * handleSearchArticles
 * @param {*} action
 */
export function* handleSearchArticles(action) {
  try {
    const response = yield call(searchArticles, action);
    const {data = {}} = response || {};
    const {message = ''} = data || {};
    if (response.status === API_RESPONSE_SUCCESS) {
      yield put({
        type: SEARCH_ARTICLES_SUCCESS,
        payload: {searchArticlesInfo: data},
      });
    } else {
      yield put({type: SEARCH_ARTICLES_ERROR, payload: {error: message}});
    }
  } catch (error) {
    yield put({type: SEARCH_ARTICLES_ERROR});
  }
}

// SearchArticle watcher saga
export function* searchArticleSaga() {
  yield takeEvery(SEARCH_ARTICLES_REQUEST, handleSearchArticles);
}
