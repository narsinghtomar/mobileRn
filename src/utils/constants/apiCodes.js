/**
 * DEFAULT ERROR STATUS
 */

import {strings} from '../../i18n';

export const DEFAULT_ERROR_STATUS = 500;
export const NETWORK_ERROR_STATUS = 599;

/**
 * API expected reponse codes
 */
export const API_RESPONSE_SUCCESS = 200;
export const API_RESPONSE_CREATE_SUCCESS = 201;
export const API_RESPONSE_AUTHENTICATION_ERROR = 401;

/**
 *  Error String
 */
export const DEFAULT_ERROR_STRING = 'Some thing wrong Error';
export const NETWORK_ERROR_STRING = strings('app.nointernet');

/**
 * API Headers
 */
export const API_HEADER_AUTHORIZATION_KEY = 'Authorization';
export const API_HEADER_AUTHORIZATION_ACCESS_TOKEN_KEY = 'access_token';
export const API_HEADER_AUTHORIZATION_BEARER_VALUE = `Bearer ${API_HEADER_AUTHORIZATION_ACCESS_TOKEN_KEY}`;
export const API_HEADER_CONTENT_TYPE_KEY = 'Content-Type';
export const API_HEADER_CONTENT_TYPE = 'content-type';
export const API_HEADER_CONTENT_TYPE_JSON_VALUE = 'application/json';
export const API_HEADER_ACCEPT_VERSION = 'accept-version';
export const API_HEADER_LOCALE = 'locale';
export const API_HEADER_SOURCE = 'source';
export const API_HEADER_VERSION = 'version';
