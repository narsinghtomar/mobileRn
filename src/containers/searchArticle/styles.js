/**
 * SearchArticle Style
 */
import {StyleSheet} from 'react-native';
import {COLOR_GRAY_50, COLOR_SECONDARY, COLOR_WHITE} from '../../utils/colors';
import {getDeviceWidth} from '../../utils/helper';
import {fonts, fontSize} from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
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
    textAlign: 'left',
    ...fonts.fontFamilyBold(),
    ...fontSize.fontSizeMedium(),
  },
  btnContainer: {
    width: getDeviceWidth() * 0.55,
    height: 48,
  },

  flatListContainer: {
    flex: 1,
    alignItems: 'center',
  },
  flatListBox: {
    width: '94%',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  notFoundText: {
    textAlign: 'center',
    color: COLOR_GRAY_50,
    ...fonts.fontFamilyRegular(),
    ...fontSize.fontSizeMedium(),
  },
});

export default styles;
