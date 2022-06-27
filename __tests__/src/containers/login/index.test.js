/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {LoginPage} from '../../../../src/containers';
import renderer from 'react-test-renderer';

describe('LoginPage', () => {
  const loginReducer = {
    isFatching: true,
    loginSuccess: false,
    loginFail: false,
    loginErrorData: null,
  };

  const initialState = {
    loginReducer,
  };

  const mockStore = configureStore();
  let store;

  it('LoginPage renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <LoginPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
