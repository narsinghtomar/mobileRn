/**
 *
 */
import {loginUser} from '../../../../../src/network/sagas/login';
import mockAxios from 'jest-mock-axios';
import axios from 'axios';
import {LOGIN_URL} from '../../../../../src/utils/constants/apiEndpoints';
var MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
// Mock jest and set the type
jest.mock('axios');

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet(LOGIN_URL).reply(200, {
  users: [{id: 1, name: 'John Smith'}],
});

describe('Login Saga', () => {
  afterEach(() => {
    mockAxios.reset();
  });
  describe('Login Saga for loginUser', () => {
    const thenFn = jest.fn();
    mockAxios.post().then(thenFn);
    const action = {payload: {data: {loginData: {}, Headers: {}}}};
    test('should call login API and Get call api success', async () => {
      const responseData = {data: {text: 'some data'}};
      const responseObj = {
        config: {},
        data: responseData.data,
        headers: {},
        status: 200,
        statusText: 'OK',
      };
      mockAxios.mockResponse(responseObj);
      expect(thenFn).toHaveBeenCalledWith(responseObj);
      await expect(await loginUser(action)).toEqual({});
    });

    test('should call login API and Get call api success with custom response payload', async () => {
      const onResponse = jest.fn();
      const onError = jest.fn();
      return loginUser(action)
        .then(onResponse)
        .catch(onError)
        .finally(() => {
          expect(onResponse).toHaveBeenCalled();
          expect(onError).not.toHaveBeenCalled();
          expect(onResponse.mock.calls[0][0]).toEqual({});
        });
    });

    test('should call login API and Get call api success with request payload', async () => {
      expect(await loginUser(action)).toEqual({});
      //assert on the times called and arguments given to fetch
      expect(mockAxios.mock.calls.length).toEqual(0);
    });
  });
});
