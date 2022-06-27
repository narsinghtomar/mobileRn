/**
 * Root Saga
 */
import {all} from 'redux-saga/effects';
import {loginUserSaga} from './login';
import {signUpUserSaga} from './signUp';
import {articleListSaga} from './articleList';
import {searchArticleSaga} from './searchArticle';

/**
 * Single entry point to start all Sagas at once
 */
export default function* rootSaga() {
  yield all([
    loginUserSaga(),
    signUpUserSaga(),
    articleListSaga(),
    searchArticleSaga(),
  ]);
}
