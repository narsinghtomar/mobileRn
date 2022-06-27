/**
 * OnBoarding Page
 */
import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {LOGIN_PAGE_ROUTE} from '../../navigation/StackNavigator';
import {ButtonBlock, Space} from '../../components';
import {IMAGES} from '../../assets';
import {strings} from '../../i18n';
import styles from './styles';

function OnBoardingPage(props) {
  const {navigation} = props || {};

  /**
   * Get Started Button Props
   */
  const getStartedButtonProps = () => {
    return {
      text: strings('onBoarding.getStarted'),
      onPress: getStartedPress,
      buttonStyle: styles.btnContainer,
    };
  };
  const getStartedPress = () => {
    navigation.navigate(LOGIN_PAGE_ROUTE);
  };

  /**
   * _buildHeaderView
   */
  const _buildHeaderView = () => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={IMAGES.TEMPLOGO}
          style={styles.imgStyle}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Space height={60} />
      {_buildHeaderView()}
      <Space height={60} />
      <View style={styles.baseContainer}>
        <Text style={styles.baseTitle}>
          {strings('onBoarding.bulletTitle')}
        </Text>
      </View>
      <Space height={45} />
      <View>{ButtonBlock(getStartedButtonProps())}</View>
    </SafeAreaView>
  );
}

/**
 *
 * @param {*} dispatch
 * @returns
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}), dispatch);
};

/**
 *
 * @param {*} _state
 * @returns
 */
const mapStateToProps = _state => ({});
export default connect(mapStateToProps, mapDispatchToProps)(OnBoardingPage);
