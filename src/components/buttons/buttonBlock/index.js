/**
 * Button Block Components.
 */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {COLOR_SECONDARY} from '../../../utils/colors';
import {styles} from './styles';

/**
 *
 * @param {*} props
 * @returns
 */
const ButtonBlock = props => {
  const {buttonStyle, onPress, text, textStyle, disabled = false} = props || {};
  return (
    <TouchableOpacity
      style={[styles.touchableHighlight, buttonStyle]}
      underlayColor={COLOR_SECONDARY}
      disabled={disabled}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBlock;
