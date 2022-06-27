/**
 * Floating Button Components Styles.
 */
import {StyleSheet} from 'react-native';
import {COLOR_GRAY_50, COLOR_SECONDARY} from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLOR_SECONDARY,
    width: 60,
    height: 60,
    borderRadius: 40,
    bottom: 30,
    right: 30,
    borderWidth: 0.4,
    borderColor: COLOR_GRAY_50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 30,
    width: 30,
  },
});
