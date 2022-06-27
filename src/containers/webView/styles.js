/**
 * Webview style
 */
import {StyleSheet, Dimensions} from 'react-native';
import {COLOR_LOADER_OPACITY, COLOR_WHITE} from '../../utils/colors';
import {isIOS} from '../../utils/helper';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  loaderContainer: {
    zIndex: 1,
    elevation: 2,
    height: isIOS() ? height : height * 1.1,
    width: width,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLOR_LOADER_OPACITY,
    color: 'red',
  },
  indicator: {
    height: 40,
    width: 40,
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loading: {
    width: 0,
    height: 0,
  },
});

export default styles;
