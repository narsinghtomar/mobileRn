/**
 * Helper
 */
import {Dimensions, Platform, StatusBar} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const {height: D_HEIGHT, width: D_WIDTH} = (() => {
  const {width, height} = Dimensions.get('window');
  if (width === 0 && height === 0) {
    return Dimensions.get('screen');
  }
  return {width, height};
})();

/**
 * isIOS
 */
const isIOS = () => {
  return Platform.OS === 'ios';
};

/**
 * isAndroid
 */
const isAndroid = () => {
  return Platform.OS === 'android';
};

/**
 * Android platform version
 */
const getAndroidVersion = () => {
  return Platform.Version;
};

/**
 * isIphoneX
 */
const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (D_HEIGHT === 780 ||
      D_WIDTH === 780 ||
      D_HEIGHT === 812 ||
      D_WIDTH === 812 ||
      D_HEIGHT === 844 ||
      D_WIDTH === 844 ||
      D_HEIGHT === 896 ||
      D_WIDTH === 896 ||
      D_HEIGHT === 926 ||
      D_WIDTH === 926)
  );
};

/**
 * iPhoneXAdditional
 */
const iPhoneXAdditional = value => {
  return isIphoneX() ? value : 0;
};

/**
 * ifIphoneX
 */
const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

/**
 * getStatusBarHeight
 */
const getStatusBarHeight = safe => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
};

/**
 * getBottomSpace
 */
const getBottomSpace = () => {
  return isIphoneX() ? 34 : 0;
};

/**
 * return true is @param a is empty or non empty valid string
 */
const isString = a => {
  return typeof a === 'string';
};

/**
 * return true if @param a is non empty valid string
 */
const isNonEmptyString = a => {
  return !!(isString(a) && a !== '');
};
/**
 * return true if @param a is non empty valid string
 */
const isNonEmpty = a => {
  return a?.toString()?.length > 0;
};

/**
 * return device width
 * @returns
 */
const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};

/**
 * return device height
 * @returns
 */
const getDeviceHeight = () => {
  return Dimensions.get('window').height;
};

/**
 * Network Available
 */
const isNetworkAvailable = async () => {
  const networkConnection = await NetInfo.fetch();
  return networkConnection.isConnected;
};

/**
 * Export
 */
export {
  isIOS,
  isAndroid,
  isIphoneX,
  iPhoneXAdditional,
  getBottomSpace,
  getStatusBarHeight,
  ifIphoneX,
  isString,
  isNonEmptyString,
  getDeviceWidth,
  getDeviceHeight,
  getAndroidVersion,
  isNetworkAvailable,
  isNonEmpty,
};
