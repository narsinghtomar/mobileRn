/**
 * SearchItem
 */
import React from 'react';
import {TouchableWithoutFeedback, View, Text} from 'react-native';
import styles from './styles';

const SearchItem = props => {
  const {item = {}, index, pressSearchHistryItem} = props || {};
  const {searchText, searchDatetime} = item || {};

  const onPressArticle = () => {
    pressSearchHistryItem && pressSearchHistryItem(searchText);
  };

  return (
    <TouchableWithoutFeedback onPress={() => onPressArticle()} key={index}>
      <View style={styles.row}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {searchText}
        </Text>
        {searchDatetime && (
          <Text style={styles.publishedDate}>
            {new Date(searchDatetime).toLocaleDateString()}{' '}
            {new Date(searchDatetime).toLocaleTimeString()}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchItem;
