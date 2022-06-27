/**
 * ImageWithText
 */
import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {COLOR_SECONDARY} from '../../utils/colors';

const ImageWithText = props => {
  const {
    imagePosition = 'left',
    title,
    titleStyle,
    imgStyle,
    size = 12,
    tintColor = COLOR_SECONDARY,
    resizeMode = 'contain',
    isClickable = false,
    containerStyle = {},
    onPress,
    name,
    image,
  } = props || {};

  const imgSizeColorStyle = {height: size, width: size, tintColor: tintColor};

  return (
    <TouchableOpacity
      disabled={!isClickable}
      style={[styles.parent, containerStyle]}
      onPress={() => {
        onPress && onPress(name);
      }}>
      {imagePosition === 'left' && (
        <Image
          source={image}
          style={[styles.imgLeft, imgSizeColorStyle, imgStyle]}
          resizeMode={resizeMode}
        />
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {imagePosition === 'right' && (
        <Image
          source={image}
          style={[styles.imgRight, imgSizeColorStyle, imgStyle]}
          resizeMode={resizeMode}
        />
      )}
    </TouchableOpacity>
  );
};

export default ImageWithText;
