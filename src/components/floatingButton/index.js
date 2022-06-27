/**
 * Floating Button
 */
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../assets';
import {styles} from './styles';

const FloatingButton = props => {
  const {onPress} = props || {};
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      style={styles.container}>
      <Image source={IMAGES.SEARCH} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
