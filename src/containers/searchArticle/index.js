/**
 * SearchArticles Page
 */
import React, {useState, useCallback, useEffect} from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchArticlesAction from '../../redux/actions/searchArticle';
import {HeaderBar, Loader, Space} from '../../components';
import ArticleItem from '../articleList/articleItem';
import {APIKEY, SEARCH, WORLD} from '../../utils/constants/constants';
import styles from './styles';
import {COLOR_SECONDARY} from '../../utils/colors';
import {strings} from '../../i18n';

function SearchArticlePage(props) {
  const {
    navigation,
    searchArticles,
    isFatching,
    searchArticlesData = [],
    route,
    isPaginating,
    isPageFinished,
    articlesCount,
  } = props || {};
  const {params} = route || {};
  const {category, searchText} = params || {};

  const [page, setPage] = useState(0);
  console.log('searchArticlesData', searchArticlesData?.length);

  /**
   * API CALLs
   * Page With default size Zero for Articles list
   */
  useEffect(() => {
    setPage(0);
    const delay = setTimeout(() => {
      fetchSearchArticles(0);
    }, 50);
    return () => {
      clearTimeout(delay);
    };
  }, [category, fetchSearchArticles]);

  /**
   * method for handling pagination when user reach to end of the list
   */
  const handleLoadMoreData = useCallback(() => {
    if (!isPaginating && !isPageFinished) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchSearchArticles(nextPage);
    }
  }, [isPaginating, isPageFinished, setPage, page, fetchSearchArticles]);

  const fetchSearchArticles = useCallback(
    (pageNumber = 0) => {
      const searchData = {
        category: category ? category : WORLD,
        apiKey: APIKEY,
        searchQuary: searchText,
        page: pageNumber,
        pageSize: 10,
      };
      searchArticles && searchArticles({searchData});
    },
    [searchArticles, category, searchText],
  );

  /**
   * Returns footer section with ActivityIndicator
   */
  const listFooter = () => {
    if (isPaginating && !isPageFinished) {
      return <ActivityIndicator size={'large'} color={COLOR_SECONDARY} />;
    }
    if (articlesCount === 1) {
      return <Space height={100} />;
    } else {
      return <Space height={70} />;
    }
  };

  /**
   * Render Inspiring Quote Item
   */
  const renderArticleItem = ({item, index}) => {
    return (
      <ArticleItem
        article={item}
        index={index}
        navigation={navigation}
        type={SEARCH}
      />
    );
  };

  /**
   * _buildRenderEmptyMsg
   */
  const _buildRenderEmptyMsg = () => {
    return searchArticlesData?.length === 0 && !isFatching ? (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>
          {strings('category.resultNotFound')}
        </Text>
      </View>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <Loader isLoading={isFatching} />
      <HeaderBar headerText={category || ''} navigation={navigation} />
      {_buildRenderEmptyMsg()}
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchArticlesData}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={renderArticleItem}
          extraData={searchArticlesData}
          style={styles.flatListBox}
          onEndReached={handleLoadMoreData}
          onEndReachedThreshold={0.1}
          ListFooterComponent={listFooter}
        />
      </View>
    </View>
  );
}

/**
 *
 * @param {*} dispatch
 * @returns
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(Object.assign({}, searchArticlesAction), dispatch);
};

/**
 *
 * @param {*} state
 * @returns
 */
const mapStateToProps = state => ({
  isFatching: state.searchArticlesReducer.isFatching,
  searchArticlesData: state.searchArticlesReducer.searchArticlesData,
  searchArticlesErrorData: state.searchArticlesReducer.searchArticlesErrorData,
  isPaginating: state.searchArticlesReducer.isPaginating,
  isPageFinished: state.searchArticlesReducer.isPageFinished,
  articlesCount: state.searchArticlesReducer.articlesCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchArticlePage);
