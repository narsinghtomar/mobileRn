/**
 * Webview
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {WebViewPage} from '../../../../src/containers';

describe('WebView Page renders correctly', () => {
  const mockStore = configureStore();
  let store;

  it('WebView component renders correctly', async () => {
    jest.useFakeTimers();
    store = mockStore();
    const params = {
      params: {},
    };

    const tree = await renderer
      .create(
        <Provider store={store}>
          <WebViewPage route={params} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
