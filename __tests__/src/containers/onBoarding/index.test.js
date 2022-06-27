/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {OnBoardingPage} from '../../../../src/containers';
import renderer from 'react-test-renderer';

describe('OnBoardingPage', () => {
  const initialState = {};

  const mockStore = configureStore();
  let store;

  it('OnBoardingPage renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <OnBoardingPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
