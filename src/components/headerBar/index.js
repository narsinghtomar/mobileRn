/**
 * Header Bar Components.
 */
import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {getStatusBarHeight} from '../../utils/helper';
import {COLOR_SECONDARY} from '../../utils/colors';
import {IMAGES} from '../../assets';
import {styles} from './styles';
import Space from '../space';

const HeaderBar = props => {
  const {
    navigation,
    headerText = 'Article Details',
    onBackPress,
    isBackIconShow = true,
    backIcon = IMAGES.ARROW,
    callBackFunction,
  } = props || {};

  const backPress = () => {
    callBackFunction && callBackFunction();
    navigation.goBack();
  };

  /**
   * _buildBackIconView
   */
  const _buildBackIconView = () => {
    return (
      <View style={styles.backIconView}>
        {isBackIconShow && (
          <TouchableOpacity
            style={[styles.touchableHighlight]}
            underlayColor={COLOR_SECONDARY}
            onPress={onBackPress ? onBackPress : backPress}>
            <Image source={backIcon} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  /**
   * _buildHeaderTextView
   */
  const _buildHeaderTextView = () => {
    return (
      <View style={styles.textView}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    );
  };

  /**
   *
   */
  return (
    <>
      <Space height={getStatusBarHeight(true)} />
      <View style={styles.headerContainer}>
        {_buildBackIconView()}
        {_buildHeaderTextView()}
      </View>
    </>
  );
};

export default HeaderBar;
