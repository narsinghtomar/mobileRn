/**
 *
 */
import {environment} from '../environment';
import {DEV, IT, PREPROD, PROD} from '../../constants/constants';
import {
  DEV_BASE_SERVER_URL,
  IT_BASE_SERVER_URL,
  PRE_PROD_BASE_SERVER_URL,
  BASE_SERVER_URL,
} from '../../constants/apiEndpoints';

/**
 * getBaseUrl
 */
const getBaseUrl = () => {
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
  return BASE_URL;
};

export {getBaseUrl};
