/**
 * Button Components Styles.
 */
import {StyleSheet} from 'react-native';
import {
  COLOR_SECONDARY,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  COLOR_GRAY_20,
  COLOR_GRAY_50,
} from '../../../utils/colors';
import {fonts, fontSize} from '../../../utils/styles';

/**
 *
 */
export const styles = StyleSheet.create({
  touchableHighlight: disabled => ({
    paddingVertical: 11,
    paddingHorizontal: 15,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: disabled ? COLOR_GRAY_50 : COLOR_SECONDARY,
    borderWidth: 2,
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: disabled ? COLOR_GRAY_20 : COLOR_TRANSPARENT,
  }),
  text: disabled => ({
    color: disabled ? COLOR_BLACK : COLOR_SECONDARY,
    alignSelf: 'center',
    letterSpacing: 0.25,
    ...fontSize.fontSizeRegular(),
    ...fonts.fontFamilyBold(),
    textAlignVertical: 'center',
    textAlign: 'center',
  }),
  btnImage: {
    marginRight: 10,
    width: 15,
    height: 15,
  },
});
