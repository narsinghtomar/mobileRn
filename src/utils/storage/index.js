/**
 * Async Storage
 */

import AsyncStorage from '@react-native-community/async-storage';
import {LANGUAGE_CODE_ASYNC_KEY} from '../constants/constants';

/**
 *
 * @param {*} key
 * @param {*} value
 * @returns
 */
const setItem = async (key, value) => {
  try {
    if (value) {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.removeItem(key);
    }
    return true;
  } catch (e) {
    return false;
  }
};

/**
 *
 * @param {*} key
 * @returns
 */
const getItem = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    return null;
  }
};

/**
 *
 * @param {*} langauge
 * @returns
 */
const saveLanguage = async langauge =>
  setItem(LANGUAGE_CODE_ASYNC_KEY, langauge);

/**
 *
 * @returns
 */
const loadLanguageCode = async () => getItem(LANGUAGE_CODE_ASYNC_KEY);

export {setItem, getItem, saveLanguage, loadLanguageCode};
