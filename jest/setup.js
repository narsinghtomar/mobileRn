/**
 * Jest SetUp
 */
import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import mockRNLocalization from './react-native-localization-mock';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

// @ts-expect-error
global.__reanimatedWorkletInit = jest.fn();

jest.mock('react-native-localize', () => {
  return {
    getLocales: jest.fn(),
    findBestAvailableLanguage: jest.fn(),
  };
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native-localization', () => mockRNLocalization);

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.useFakeTimers();
Date.now = jest.fn(() => 1503187200000);

const DATE_TO_USE = new Date('2016');
const _Date = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;

global.mockAxios = require('jest-mock-axios');

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const {EventEmitter} = require('events');
  return EventEmitter;
});

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
