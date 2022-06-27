/**
 * Loader
 */
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COLOR_SECONDARY} from '../../utils/colors';
import {styles} from './styles';

const Loader = props => {
  const {isLoading} = props;
  return isLoading ? (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size={'large'}
          animating={isLoading}
          color={COLOR_SECONDARY}
        />
      </View>
    </View>
  ) : null;
};

export default Loader;
