/**
 * SnackBar Components Styles.
 */
import {StyleSheet} from 'react-native';
import {COLOR_WHITE} from '../../colors';
import {fonts, fontSize} from '../../styles';

export const snackBarstyle = StyleSheet.create({
  flash: {
    ...fontSize.fontSizeMedium(),
    ...fonts.fontFamilyBold(),
    color: COLOR_WHITE,
  },
});
