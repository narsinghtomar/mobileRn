/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {SearchArticlePage} from '../../../../src/containers';

describe('SearchArticlePage', () => {
  const searchArticlesReducer = {
    isFatching: true,
    searchHistoryList: [],
    searchArticlesData: [],
    searchArticlesErrorData: null,
    isPaginating: false,
    isPageFinished: false,
    articlesCount: 0,
  };

  const initialState = {
    searchArticlesReducer,
  };

  const mockStore = configureStore();
  let store;

  it('SearchArticlePage renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <SearchArticlePage searchHistoryList={[]} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
