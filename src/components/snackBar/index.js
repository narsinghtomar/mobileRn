import {showMessage, hideMessage} from 'react-native-flash-message';
import {COLOR_GREEN_5, COLOR_RED_25} from '../../utils/colors';
import {styles} from './styles';

/**
 * snackbar
 * use background color and text color if required.
 * backgroundColor: "your background color code".
 * color: "your text color code".
 * @param {*} message
 * @param {*} type
 * @param {*} description
 */
export const SnackBar = (
  message,
  type = 2,
  description = '',
  autoHide = false,
  hideOnPress = false,
) => {
  showMessage({
    message: message,
    type: 'default',
    description: description,
    autoHide: autoHide,
    hideOnPress: hideOnPress,
    backgroundColor: type === 1 ? COLOR_GREEN_5 : COLOR_RED_25,
    titleStyle: styles.title(type),
    textStyle: styles.textStyle(type),
  });
};

export const HideSnackBar = () => {
  hideMessage();
};
