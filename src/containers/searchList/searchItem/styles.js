/**
 * Search Item Style
 */
import {StyleSheet} from 'react-native';
import {
  COLOR_GRAY_250,
  COLOR_GRAY_50,
  COLOR_WHITE,
} from '../../../utils/colors';
import {fonts, fontSize} from '../../../utils/styles';

const styles = StyleSheet.create({
  row: {
    marginVertical: 4,
    borderRadius: 18,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: COLOR_WHITE,
    flexDirection: 'column',
    paddingHorizontal: 15,
    width: '100%',
    borderColor: COLOR_GRAY_50,
    borderWidth: 0.5,
  },
  title: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    color: COLOR_GRAY_250,
  },
  publishedDate: {
    marginTop: 6,
    fontSize: 10,
    color: COLOR_GRAY_50,
    ...fonts.fontFamilyRegular(),
    ...fontSize.fontSizeExtraSmall(),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
});

export default styles;
