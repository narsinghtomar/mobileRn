/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {ArticleListPage} from '../../../../src/containers';
import renderer from 'react-test-renderer';

describe('ArticleListPage', () => {
  const articleListReducer = {
    isFatching: true,
    nyTimesInfo: [],
    getNyTimesErrorData: null,
  };

  const initialState = {
    articleListReducer,
  };

  const mockStore = configureStore();
  let store;

  it('ArticleListPage renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <ArticleListPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
