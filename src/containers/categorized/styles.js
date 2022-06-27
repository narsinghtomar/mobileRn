/**
 * CategorizedList page Style
 */
import {StyleSheet} from 'react-native';
import {COLOR_BACKGROUND, COLOR_SECONDARY} from '../../utils/colors';
import {getDeviceWidth} from '../../utils/helper';
import {fonts, fontSize} from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 17,
  },
  baseContainer: {
    textAlign: 'left',
    marginHorizontal: 41,
  },
  baseTitle: {
    color: COLOR_SECONDARY,
    lineHeight: 24,
    paddingHorizontal: 20,
    textAlign: 'center',
    ...fonts.fontFamilyBold(),
    ...fontSize.fontSizeMedium(),
  },
  btnContainer: {
    width: getDeviceWidth() * 0.55,
    height: 48,
  },
});

export default styles;
