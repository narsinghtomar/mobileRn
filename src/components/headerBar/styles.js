/**
 * Header Components Styles.
 */
import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_GRAY_250, COLOR_WHITE} from '../../utils/colors';
import {fonts, fontSize} from '../../utils/styles';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingStart: 8,
    paddingEnd: 8,
    margin: 5,
  },
  backIconView: {
    alignItems: 'flex-start',
  },
  touchableHighlight: {
    padding: 5,
    backgroundColor: COLOR_GRAY_250,
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 11,
    height: 11,
    transform: [{scaleX: 1}],
    tintColor: COLOR_WHITE,
  },
  cartIcon: {
    height: 18,
    width: 18,
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
  headerText: {
    color: COLOR_BLACK,
    alignSelf: 'center',
    textAlign: 'center',
    letterSpacing: 0.25,
    textTransform: 'capitalize',
    ...fontSize.fontSizeExtraLarge(),
    ...fonts.fontFamilyBold(),
  },
});
