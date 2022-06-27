/**
 * SignUpPage Style
 */
import {StyleSheet} from 'react-native';
import {
  COLOR_BACKGROUND,
  COLOR_BLACK,
  COLOR_SECONDARY,
} from '../../utils/colors';
import {fonts, fontSize} from '../../utils/styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  avoidingView: {
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: COLOR_BACKGROUND,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  signInText: {
    color: COLOR_BLACK,
    ...fontSize.fontSizeExtraLarge(),
    ...fonts.fontFamilyBold(),
  },
  signUpView: {
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    color: COLOR_BLACK,
    marginEnd: 5,
    marginBottom: 10,
    ...fontSize.fontSizeRegular(),
    ...fonts.fontFamilyRegular(),
  },
  noAccountTextTap: {
    color: COLOR_SECONDARY,
    marginEnd: 5,
    marginBottom: 10,
    textDecorationLine: 'underline',
    ...fontSize.fontSizeRegular(),
    ...fonts.fontFamilyRegular(),
  },
});

export default styles;
