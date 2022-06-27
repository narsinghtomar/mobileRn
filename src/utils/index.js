/**
 *
 */
import {Alert} from 'react-native';
import {strings} from '../i18n';

export const showAlert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: strings('app.ok'),
        onPress: () => {
          /* TODO document why this method 'onPress' is empty */
        },
      },
    ],
    {
      cancelable: false,
    },
  );
};
