/**
 * Environment
 */
import {DEV, IT, PREPROD, PROD} from '../../constants/constants';

const selectEnvironment = [DEV, IT, PREPROD, PROD];

/**
 * 0 = dev
 * 1 = it
 * 2 = preProd
 * 3 = prod
 */
const environment = () => {
  return selectEnvironment[0];
};

export {environment};
