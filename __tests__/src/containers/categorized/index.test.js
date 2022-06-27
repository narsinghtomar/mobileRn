/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {CategorizedListPage} from '../../../../src/containers';
import renderer from 'react-test-renderer';

describe('CategorizedList Page', () => {
  const initialState = {};

  const mockStore = configureStore();
  let store;

  it('CategorizedList page renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <CategorizedListPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
