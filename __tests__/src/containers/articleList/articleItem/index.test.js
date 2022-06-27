/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ArticleItem from '../../../../../src/containers/articleList/articleItem';

describe('ArticleItem', () => {
  const initialState = {};

  const mockStore = configureStore();
  let store;

  it('ArticleItem renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <ArticleItem />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
