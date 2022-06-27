/**
 * SearchArticles Action
 */
export const SEARCH_ARTICLES_REQUEST = 'SEARCH_ARTICLES_REQUEST';
export const SEARCH_ARTICLES_SUCCESS = 'SEARCH_ARTICLES_SUCCESS';
export const SEARCH_ARTICLES_ERROR = 'SEARCH_ARTICLES_ERROR';
export const SEARCH_SAVE_HISTORY = 'SEARCH_SAVE_HISTORY';

/**
 * searchArticles
 * @param {*} data
 * @returns
 */
export const searchArticles = data => {
  return {
    type: SEARCH_ARTICLES_REQUEST,
    payload: {data},
  };
};

/**
 * searchArticles
 * @param {*} data
 * @returns
 */
export const saveSearchTextOnHistory = data => {
  return {
    type: SEARCH_SAVE_HISTORY,
    payload: {data},
  };
};
