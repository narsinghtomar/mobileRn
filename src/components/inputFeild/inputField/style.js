/*
 * Input Field Style
 */
import {StyleSheet, Dimensions} from 'react-native';
import {
  COLOR_WHITE,
  COLOR_ERROR,
  COLOR_PRIMARY,
  COLOR_WARM_GRAY,
  COLOR_BLACK,
} from '../../../utils/colors';
import {fonts, fontSize} from '../../../utils/styles';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  commonInputBox: {
    width: width * 0.9,
    height: 45,
    backgroundColor: COLOR_WHITE,
    color: COLOR_PRIMARY,
    borderColor: COLOR_WARM_GRAY,
    borderRadius: 4,
    marginVertical: 5,
    padding: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  error: {
    color: COLOR_ERROR,
    marginBottom: 5,
    width: width * 0.9,
    ...fontSize.fontSizeSmall(),
    ...fonts.fontFamilyRegular(),
  },
  info: {
    width: width * 0.9,
    color: COLOR_WARM_GRAY,
    lineHeight: 18,
    letterSpacing: 0.5,
    paddingStart: 5,
    paddingEnd: 5,
    ...fontSize.fontSizeSmall(),
    ...fonts.fontFamilyRegular(),
  },
  inputLabel: {
    width: width * 0.9,
    color: COLOR_BLACK,
    lineHeight: 18,
    letterSpacing: 0.5,
    ...fontSize.fontSizeSmall(),
    ...fonts.fontFamilyRegular(),
  },
  inputIcon: {
    height: 25,
    width: 25,
    position: 'absolute',
    alignItems: 'flex-start',
    marginStart: 30,
    marginTop: 20,
    zIndex: 1,
  },
});

export default styles;
