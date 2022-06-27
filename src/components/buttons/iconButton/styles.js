/**
 * ImageButton Components Styles.
 */
import {StyleSheet} from 'react-native';
import {COLOR_WHITE, COLOR_SECONDARY} from '../../../utils/colors';
import {fonts, fontSize} from '../../../utils/styles';

/**
 *
 */
export const styles = StyleSheet.create({
  touchableHighlight: {
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: COLOR_SECONDARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  text: {
    color: COLOR_WHITE,
    alignSelf: 'center',
    letterSpacing: 0.25,
    ...fontSize.fontSizeSmall(),
    ...fonts.fontFamilyRegular(),
  },
  image: {
    height: 18,
    width: 18,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: 'center',
  },
});
