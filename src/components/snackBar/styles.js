/**
 * SnackBar Style
 */
import {StyleSheet} from 'react-native';
import {COLOR_GREEN_75, COLOR_BLACK_50} from '../../utils/colors';
import {fonts, fontSize} from '../../utils/styles';

export const styles = StyleSheet.create({
  title: type => ({
    textAlign: 'left',
    lineHeight: 30,
    ...fonts.fontFamilyBold(),
    ...fontSize.fontSizeMedium(),
    color: type === 1 ? COLOR_GREEN_75 : COLOR_BLACK_50,
  }),
  textStyle: type => ({
    textAlign: 'left',
    ...fonts.fontFamilyBold(),
    ...fontSize.fontSizeExtraSmall(),
    color: type === 1 ? COLOR_GREEN_75 : COLOR_BLACK_50,
  }),
});
