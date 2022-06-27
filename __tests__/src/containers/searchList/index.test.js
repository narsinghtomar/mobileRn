/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SearchListPage} from '../../../../src/containers';
import renderer from 'react-test-renderer';

describe('SearchListPage', () => {
  const searchArticlesReducer = {
    isFatching: true,
    searchHistoryList: [],
  };

  const initialState = {
    searchArticlesReducer,
  };

  const mockStore = configureStore();
  let store;

  it('SignUpPage renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <SearchListPage searchHistoryList={[]} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
