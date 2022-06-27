/**
 * Article Item Style
 */
import {StyleSheet} from 'react-native';
import {
  COLOR_BLACK_30,
  COLOR_GRAY_250,
  COLOR_GRAY_50,
  COLOR_WHITE,
} from '../../../utils/colors';
import {getDeviceWidth} from '../../../utils/helper';
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
    overflow: 'hidden',
    borderColor: COLOR_GRAY_50,
    borderWidth: 0.5,
  },
  itemIndicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  descriptionContainer: {
    flex: 0.6,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  image: {
    width: getDeviceWidth(),
    height: 200,
    overflow: 'hidden',
    marginTop: -10,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backgroundColor: COLOR_GRAY_250,
  },
  title: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    color: COLOR_BLACK_30,
  },
  abstract: {
    marginTop: 10,
    textAlign: 'left',
    color: COLOR_GRAY_50,
    ...fonts.fontFamilyMedium(),
    ...fontSize.fontSizeSmall(),
  },
  byline: {
    textAlign: 'left',
    marginTop: 10,
    color: COLOR_GRAY_250,
    ...fonts.fontFamilyRegular(),
    ...fontSize.fontSizeSmall(),
  },
  publishedDate: {
    fontSize: 10,
    marginLeft: 5,
    color: COLOR_GRAY_250,
    ...fonts.fontFamilyRegular(),
    ...fontSize.fontSizeExtraSmall(),
  },
  detailIndicatorContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
});

export default styles;
