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
const IconButton = props => {
  const {
    buttonStyle,
    onPress,
    text,
    textStyle,
    image,
    imageStyle,
    tintColor,
    activeOpacity = 0.5,
  } = props || {};
  return (
    <TouchableOpacity
      style={[styles.touchableHighlight, buttonStyle]}
      underlayColor={COLOR_SECONDARY}
      onPress={onPress}
      activeOpacity={activeOpacity}>
      <Image
        style={[styles.image, {tintColor: tintColor}, imageStyle]}
        source={image}
        resizeMode="contain"
      />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
