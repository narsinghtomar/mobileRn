/*
 * Network Wrapper
 */
import axios from 'axios';
import {
  DEFAULT_ERROR_STATUS,
  API_RESPONSE_SUCCESS,
  DEFAULT_ERROR_STRING,
  API_RESPONSE_CREATE_SUCCESS,
  NETWORK_ERROR_STRING,
  NETWORK_ERROR_STATUS,
} from '../utils/constants/apiCodes';
import {
  DEV_BASE_SERVER_URL,
  IT_BASE_SERVER_URL,
  PRE_PROD_BASE_SERVER_URL,
  BASE_SERVER_URL,
} from '../utils/constants/apiEndpoints';
import {DEV, IT, PREPROD, PROD} from '../utils/constants/constants';
import {isNetworkAvailable} from '../utils/helper';
import {environment} from '../utils/helper/environment';

/**
 * unit: milliseconds
 */
const TIMEOUT = 10000;

/**
 * Environment [DEV, IT, PREPROD, PROD]
 */
let BASE_URL = DEV_BASE_SERVER_URL;
if (environment() === DEV) {
  BASE_URL = DEV_BASE_SERVER_URL;
} else if (environment() === IT) {
  BASE_URL = IT_BASE_SERVER_URL;
} else if (environment() === PREPROD) {
  BASE_URL = PRE_PROD_BASE_SERVER_URL;
} else if (environment() === PROD) {
  BASE_URL = BASE_SERVER_URL;
}

/**
 * Make Fetch NetworkCall
 * @param {*} config
 * @returns
 */
async function makeAxiosNetworkCall(config) {
  const response = {};
  const defaultErrorString = DEFAULT_ERROR_STRING;
  const url = BASE_URL + config.url;
  console.log(url);
  const headers = {
    ...config.headers,
  };
  const {file = false} = config;

  //return with network error if not connected to internet
  const isInternetConnected = await isNetworkAvailable();
  if (!isInternetConnected) {
    response.message = NETWORK_ERROR_STRING;
    response.status = NETWORK_ERROR_STATUS;
    return response;
  }
  const res = await axios({
    url: url,
    method: config.method,
    headers: headers,
    data: file ? config.data : JSON.stringify(config.data),
    timeout: TIMEOUT,
  });

  try {
    if (res) {
      if (
        res.status === API_RESPONSE_CREATE_SUCCESS ||
        res.status === API_RESPONSE_SUCCESS
      ) {
        response.status = API_RESPONSE_SUCCESS;
        response.data = res?.data;
      } else {
        response.data = res?.data;
        response.status = res.status;
      }

      if (response.status !== API_RESPONSE_SUCCESS) {
        response.message = response.data.message || defaultErrorString;
        response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
        if (response) {
          if (response.data) {
            response.message = response.data.message;
            response.status = response.data.status || res.status;
            response.data = response.data;
          } else {
            response.message = defaultErrorString;
            response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
          }
        }
      }
    }
  } catch (error) {
    // TODO: html error from server to be handled in a clean way or with some empty state
    response.message = defaultErrorString;
  }

  return response;
}

/*
 * Make NetworkCall
 */
function makeNetworkCall(config) {
  return makeAxiosNetworkCall(config);
}

export {makeNetworkCall};
