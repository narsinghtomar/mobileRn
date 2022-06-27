/**
 * CategorizedList Page
 */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
  ARTICLE_LIST_PAGE_ROUTE,
  SEARCH_LIST_PAGE_ROUTE,
} from '../../navigation/StackNavigator';
import {SCIENCE, WORLD} from '../../utils/constants/constants';
import {ButtonBlock, FloatingButton, Space} from '../../components';
import {strings} from '../../i18n';
import styles from './styles';

function CategorizedListPage(props) {
  const {navigation} = props || {};

  /**
   * World Button Props
   */
  const worldButtonProps = category => {
    return {
      text: strings('category.world'),
      onPress: () => {
        getStartedPress(category);
      },
      buttonStyle: styles.btnContainer,
    };
  };

  /**
   * Science Button Props
   */
  const scienceButtonProps = category => {
    return {
      text: strings('category.science'),
      onPress: () => {
        getStartedPress(category);
      },
      buttonStyle: styles.btnContainer,
    };
  };

  const getStartedPress = category => {
    navigation.navigate(ARTICLE_LIST_PAGE_ROUTE, {
      category: category,
    });
  };

  const onFlotingBtnPress = () => {
    navigation.navigate(SEARCH_LIST_PAGE_ROUTE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.baseContainer}>
        <Text style={styles.baseTitle}>
          {strings('category.selectCategoryMsg')}
        </Text>
      </View>
      <Space height={45} />
      <View>{ButtonBlock(scienceButtonProps(SCIENCE))}</View>
      <View>{ButtonBlock(worldButtonProps(WORLD))}</View>
      <Space height={50} />
      <FloatingButton onPress={onFlotingBtnPress} />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategorizedListPage);
