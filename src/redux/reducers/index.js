/**
 * Root Reducer
 */
import {combineReducers} from 'redux';
import loginReducer from './login';
import signUpReducer from './signUp';
import articleListReducer from './articleList';
import searchArticlesReducer from './searchArticle';

const rootReducer = combineReducers({
  loginReducer,
  signUpReducer,
  articleListReducer,
  searchArticlesReducer,
});

export default rootReducer;
