/**
 * SearchArticleS Reducer
 */
import * as globals from '../globals';
import defaultAction from '../../actions';
import {
  SEARCH_ARTICLES_REQUEST,
  SEARCH_ARTICLES_SUCCESS,
  SEARCH_ARTICLES_ERROR,
  SEARCH_SAVE_HISTORY,
} from '../../actions/searchArticle';

const initialState = {
  ...globals,
  searchHistoryList: [],
  searchArticlesData: [],
  isPageFinished: false,
  isPaginating: false,
  isPaginationError: false,
  page: -1,
};

const searchArticlesReducer = (
  state = initialState,
  action = defaultAction,
) => {
  const {type, payload} = action;
  switch (type) {
    case SEARCH_ARTICLES_REQUEST:
      const paginating = payload?.data?.searchData?.page > 0;
      return {
        ...state,
        isFatching: !paginating,
        searchArticlesSuccess: false,
        searchArticlesFail: false,
        searchArticlesErrorData: null,
        articlesCount: paginating ? state.articlesCount : 0,
        page: payload?.data?.searchData?.page,
        isPaginating: paginating,
        isPaginationError: false,
        searchArticlesData: paginating ? state.searchArticlesData : [],
      };
    case SEARCH_ARTICLES_SUCCESS: {
      const {searchArticlesInfo = {}} = payload || {};
      const {response = {}} = searchArticlesInfo || {};
      const {docs: articlesList = []} = response || {};

      console.log('articlesList...', articlesList.length);
      if (articlesList === null || articlesList?.length === 0) {
        return {
          ...state,
          isFatching: false,
          searchArticlesSuccess: true,
          searchArticlesFail: false,
          searchArticlesErrorData: null,
          isListFetching: false,
          isPageFinished: true,
          isPaginating: false,
          isPaginationError: false,
          articlesCount: state.searchArticlesData?.length,
        };
      } else {
        return {
          ...state,
          isFatching: false,
          searchArticlesSuccess: true,
          searchArticlesFail: false,
          searchArticlesErrorData: null,
          isPageFinished: false,
          articlesCount: state.searchArticlesData?.length,
          isPaginating: false,
          isPaginationError: false,
          searchArticlesData:
            state.page === 0
              ? articlesList
              : state.searchArticlesData.concat(articlesList),
        };
      }
    }
    case SEARCH_ARTICLES_ERROR:
      const error = state.page === 0;
      return {
        ...state,
        isFatching: false,
        searchArticlesSuccess: false,
        searchArticlesFail: error ? true : false,
        searchArticlesErrorData: payload?.error,
        articlesCount: 0,
        isPaginating: false,
        isPaginationError: error ? false : true,
      };

    case SEARCH_SAVE_HISTORY: {
      const searchHistoryObject = payload.data;
      const {searchHistoryList = []} = state || {};
      let tempHistoryList = [...searchHistoryList];

      if (tempHistoryList?.length < 5) {
        tempHistoryList = [...searchHistoryList, searchHistoryObject];
      } else {
        tempHistoryList.reverse().pop();
        tempHistoryList = [...tempHistoryList, searchHistoryObject];
      }
      return {
        ...state,
        searchHistoryList: tempHistoryList?.reverse(),
      };
    }
    default:
      return state;
  }
};

export default searchArticlesReducer;
