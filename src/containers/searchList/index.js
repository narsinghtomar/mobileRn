/**
 * SearchList Page
 */
import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchArticlesAction from '../../redux/actions/searchArticle';
import {SEARCH_ARTICLE_PAGE_ROUTE} from '../../navigation/StackNavigator';
import {Button, HeaderBar, InputField, Space} from '../../components';
import {strings} from '../../i18n';
import styles from './styles';
import SearchItem from './searchItem';

function SearchListPage(props) {
  const {
    navigation,
    saveSearchTextOnHistory,
    searchHistoryList = [],
    route,
  } = props || {};
  const {params} = route || {};
  const {category} = params || {};

  const [searchText, setSearchText] = useState('');

  /**
   * Search Button Props
   */
  const searchButtonProps = () => {
    return {
      text: strings('category.search'),
      onPress: () => getSearchAraticlePress(searchText),
      buttonStyle: styles.btnContainer,
      disabled: searchText?.length < 3,
    };
  };
  const getSearchAraticlePress = _searchText => {
    const searchHistoryObj = {
      searchText: _searchText,
      searchDatetime: new Date(),
    };
    saveSearchTextOnHistory && saveSearchTextOnHistory(searchHistoryObj);
    navigation.navigate(SEARCH_ARTICLE_PAGE_ROUTE, {
      searchText: _searchText,
      category: category,
    });
    setSearchText('');
  };

  /**
   * searchProps
   */
  const searchProps = () => {
    return {
      placeholder: strings('category.search'),
      textInputName: 'search',
      onChangeText: text => {
        handleSearchChange(text);
      },
      onBlur: () => {
        /* TODO document why this method 'onBlur' is empty */
      },
      value: searchText,
    };
  };

  const handleSearchChange = searchTextChange => {
    console.log('searchText', searchTextChange);
    setSearchText(searchTextChange);
  };
  const callBackFunction = () => {
    /* TODO document why this arrow function is empty */
  };

  const _buildSearchHistory = () => {
    return (
      <View style={styles.flatListContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchHistoryList}
          keyExtractor={(_item, index) => index.toString()}
          renderItem={renderArticleItem}
          extraData={searchHistoryList}
          style={styles.flatListBox}
        />
      </View>
    );
  };

  const renderArticleItem = ({item, index}) => {
    return (
      <SearchItem
        item={item}
        pressSearchHistryItem={getSearchAraticlePress}
        index={index}
      />
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBar
        headerText={strings('category.searchArticles')}
        navigation={navigation}
        callBackFunction={callBackFunction}
      />
      {InputField(searchProps())}
      <View>{Button(searchButtonProps())}</View>
      <Space height={30} />
      <Text style={styles.searchHistoryTitle}>
        {strings('category.searchHistory')}
      </Text>
      <Space height={30} />

      {searchHistoryList.length > 0 ? (
        _buildSearchHistory()
      ) : (
        <Text style={styles.notFound}>
          {strings('category.searchHistoryNoFound')}
        </Text>
      )}
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
  searchHistoryList: state.searchArticlesReducer.searchHistoryList,
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchListPage);
