/**
 * Button Block Components Styles.
 */
import {StyleSheet, Dimensions} from 'react-native';
import {COLOR_WHITE, COLOR_SECONDARY} from '../../../utils/colors';
import {fonts, fontSize} from '../../../utils/styles';
const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  touchableHighlight: {
    paddingHorizontal: 12,
    alignSelf: 'center',
    alignItems: 'center',
    width: width * 0.9,
    height: 45,
    borderRadius: 4,
    backgroundColor: COLOR_SECONDARY,
    marginTop: 10,
    justifyContent: 'center',
  },
  text: {
    color: COLOR_WHITE,
    alignSelf: 'center',
    letterSpacing: 0.25,
    ...fontSize.fontSizeRegular(),
    ...fonts.fontFamilyBold(),
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
