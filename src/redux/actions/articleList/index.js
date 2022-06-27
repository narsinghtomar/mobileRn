/**
 * Article List Action
 */
export const FETCH_NYTIMES_REQUEST = 'FETCH_NYTIMES_REQUEST';
export const FETCH_NYTIMES_SUCCESS = 'FETCH_NYTIMES_SUCCESS';
export const FETCH_NYTIMES_ERROR = 'FETCH_NYTIMES_ERROR';

/**
 * fetchNytimesData
 * @param {*} data
 * @returns
 */
export const fetchNytimesData = data => {
  return {
    type: FETCH_NYTIMES_REQUEST,
    payload: {data},
  };
};
