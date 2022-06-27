/**
 * Api Headers
 */
import {
  API_HEADER_AUTHORIZATION_KEY,
  API_HEADER_AUTHORIZATION_BEARER_VALUE,
  API_HEADER_AUTHORIZATION_ACCESS_TOKEN_KEY,
  API_HEADER_CONTENT_TYPE_KEY,
  API_HEADER_CONTENT_TYPE_JSON_VALUE,
  API_HEADER_LOCALE,
  API_HEADER_SOURCE,
  API_HEADER_VERSION,
} from './apiCodes';
import {getLocale} from '../../i18n';
import {isIOS} from '../helper';
import {ANDROID, IOS} from './constants';
import {version as appVersion} from '../../../package.json';

/**
 * GenerateHeaders
 * @param {*} accessToken
 * @returns
 */
const generateHeaders = accessToken => {
  const headers = {
    [API_HEADER_CONTENT_TYPE_KEY]: API_HEADER_CONTENT_TYPE_JSON_VALUE,
    [API_HEADER_LOCALE]: getLocale(),
    [API_HEADER_SOURCE]: isIOS() ? IOS : ANDROID,
    [API_HEADER_VERSION]: appVersion,
  };

  if (accessToken) {
    headers[API_HEADER_AUTHORIZATION_KEY] =
      API_HEADER_AUTHORIZATION_BEARER_VALUE.replace(
        API_HEADER_AUTHORIZATION_ACCESS_TOKEN_KEY,
        accessToken,
      );
  }
  return headers;
};

export {generateHeaders};
