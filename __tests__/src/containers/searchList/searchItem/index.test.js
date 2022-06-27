/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import SearchItem from '../../../../../src/containers/searchList/searchItem';

describe('SearchItem', () => {
  const searchArticlesReducer = {
    isFatching: true,
    searchHistoryList: [],
  };

  const initialState = {
    searchArticlesReducer,
  };

  const mockStore = configureStore();
  let store;

  it('SearchItem renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <SearchItem searchHistoryList={[]} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
