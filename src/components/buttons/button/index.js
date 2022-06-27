/**
 * Button Components.
 */

import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {COLOR_SECONDARY} from '../../../utils/colors';
import {styles} from './styles';

/**
 *
 * @param {*} props
 * @returns
 */
const Button = props => {
  const {
    buttonStyle,
    onPress,
    text,
    textStyle,
    isImageRequired = false,
    btnImage,
    activeOpacity = 0.5,
    disabled = false,
  } = props || {};
  return (
    <TouchableOpacity
      onPress={onPress}
      underlayColor={COLOR_SECONDARY}
      style={[styles.touchableHighlight(disabled), {}, buttonStyle]}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      {isImageRequired && (
        <Image source={btnImage} style={styles.btnImage} resizeMode="contain" />
      )}
      <Text style={[styles.text(disabled), textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
