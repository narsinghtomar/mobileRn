/**
 * SearchList Style
 */
import {StyleSheet} from 'react-native';
import {
  COLOR_BACKGROUND,
  COLOR_GRAY_250,
  COLOR_GRAY_50,
} from '../../utils/colors';
import {getDeviceWidth} from '../../utils/helper';
import {fonts, fontSize} from '../../utils/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 17,
  },
  textStyle: {
    textAlign: 'center',
    ...fonts.fontFamilyBold(),
    ...fontSize.fontSizeMedium(),
  },
  btnContainer: {
    marginTop: 0,
    width: getDeviceWidth() * 0.9,
    height: 45,
    justifyContent: 'center',
  },
  searchHistoryTitle: {
    marginHorizontal: 20,
    textDecorationLine: 'underline',
    color: COLOR_GRAY_250,
    ...fonts.fontFamilyBold(),
    ...fontSize.fontSizeMedium(),
  },
  notFound: {
    color: COLOR_GRAY_50,
    textAlign: 'center',
    ...fonts.fontFamilyMedium(),
    ...fontSize.fontSizeMedium(),
  },
  flatListContainer: {
    flex: 1,
    alignItems: 'center',
  },
  flatListBox: {
    width: '94%',
  },
});

export default styles;
