/**
 * ArticleListPage Page
 */
import React, {useCallback, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../../redux/actions/articleList';
import {FloatingButton, HeaderBar, Loader} from '../../components';
import styles from './styles';
import ArticleItem from './articleItem';
import {APIKEY} from '../../utils/constants/constants';
import {SEARCH_LIST_PAGE_ROUTE} from '../../navigation/StackNavigator';

function ArticleListPage(props) {
  const {
    navigation,
    fetchNytimesData,
    isFatching,
    nyTimesInfo = [],
    route,
  } = props || {};
  const {params} = route || {};
  const {category} = params || {};

  console.log('nyTimesInfo', nyTimesInfo?.length);

  useEffect(() => {
    getNyTimesData();
  }, [category, getNyTimesData]);

  const getNyTimesData = useCallback(() => {
    const categoryData = {
      category: category,
      apiKey: APIKEY,
    };
    fetchNytimesData && fetchNytimesData({categoryData});
  }, [fetchNytimesData, category]);

  /**
   * Render Inspiring Quote Item
   */
  const renderArticleItem = ({item, index}) => {
    return <ArticleItem article={item} index={index} navigation={navigation} />;
  };

  const onFlotingBtnPress = () => {
    navigation.navigate(SEARCH_LIST_PAGE_ROUTE, {
      category: category,
    });
  };

  return (
    <View style={styles.container}>
      <Loader isLoading={isFatching} />
      <HeaderBar headerText={category || ''} navigation={navigation} />
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={nyTimesInfo}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={renderArticleItem}
          extraData={nyTimesInfo}
          style={styles.flatListBox}
        />
      </View>
      <FloatingButton onPress={onFlotingBtnPress} />
    </View>
  );
}

/**
 *
 * @param {*} dispatch
 * @returns
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, homeActions), dispatch);
};

/**
 *
 * @param {*} state
 * @returns
 */
const mapStateToProps = state => ({
  isFatching: state.articleListReducer.isFatching,
  nyTimesInfo: state.articleListReducer.nyTimesInfo,
  getNyTimesErrorData: state.articleListReducer.getNyTimesErrorData,
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticleListPage);
