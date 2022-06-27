/**
 * ImageWithText Components Styles.
 */
import {StyleSheet} from 'react-native';
import {isRTL} from '../../i18n';
import {COLOR_SECONDARY} from '../../utils/colors';
import {fonts, fontSize} from '../../utils/styles';

export const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...fontSize.fontSizeRegular(),
    ...fonts.fontFamilyBold(),
    color: COLOR_SECONDARY,
    textAlign: 'left',
    alignSelf: 'center',
    lineHeight: isRTL() ? 21 : 15,
    marginTop: isRTL() ? 4 : 0,
  },
  imgRight: {
    alignSelf: 'center',
    marginLeft: 8.5,
  },
  imgLeft: {
    alignSelf: 'center',
    marginRight: 8.5,
  },
});
