/**
 * Article List Reducer
 */
import * as globals from '../globals';
import defaultAction from '../../actions';
import {
  FETCH_NYTIMES_REQUEST,
  FETCH_NYTIMES_SUCCESS,
  FETCH_NYTIMES_ERROR,
} from '../../actions/articleList';

const initialState = {
  ...globals,
  apiCallError: null,
  nyTimesInfo: null,
};

const articleListReducer = (state = initialState, action = defaultAction) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_NYTIMES_REQUEST:
      return {
        ...state,
        isFatching: true,
        getNyTimesSuccess: false,
        getNyTimesFail: false,
        getNyTimesErrorData: null,
      };
    case FETCH_NYTIMES_SUCCESS: {
      return {
        ...state,
        isFatching: false,
        getNyTimesSuccess: true,
        getNyTimesFail: false,
        getNyTimesErrorData: null,
        nyTimesInfo: payload?.nyTimesInfo?.results,
      };
    }
    case FETCH_NYTIMES_ERROR:
      return {
        ...state,
        isFatching: false,
        getNyTimesSuccess: false,
        getNyTimesFail: true,
        getNyTimesErrorData: payload?.error,
      };

    default:
      return state;
  }
};

export default articleListReducer;
