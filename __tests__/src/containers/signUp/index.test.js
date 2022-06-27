/**
 * Button
 */
import 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {SignUpPage} from '../../../../src/containers';
import renderer from 'react-test-renderer';

describe('SignUpPage', () => {
  const signUpReducer = {
    isFatching: true,
    signUpErrorData: null,
    signUpInfo: null,
  };

  const initialState = {
    signUpReducer,
  };

  const mockStore = configureStore();
  let store;

  it('SignUpPage renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore(initialState);
    const tree = await renderer
      .create(
        <Provider store={store}>
          <SignUpPage />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
