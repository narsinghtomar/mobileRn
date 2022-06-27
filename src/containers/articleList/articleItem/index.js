/**
 * ArticleItem
 */
import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import {WEBVIEW_PAGE_ROUTE} from '../../../navigation/StackNavigator';
import {
  SEARCH,
  SEARCH_IMAGE_BASE_URL,
} from '../../../utils/constants/constants';
import styles from './styles';

const ArticleItem = props => {
  const {article = {}, navigation, type} = props || {};
  const {
    title = '',
    lead_paragraph: leadParagraph = '',
    abstract = '',
    byline,
    published_date: publishedDate = '',
    pub_date: pubDate = '',
    multimedia = [],
    url,
    web_url,
  } = article || {};

  const onPressArticle = () => {
    console.log('article', article);
    const detailUrl = web_url ? web_url : url;
    navigation.navigate(WEBVIEW_PAGE_ROUTE, {
      url: detailUrl,
    });
  };
  const articleByline = typeof byline === 'object' ? byline?.original : byline;
  const articlePublishedDate = pubDate ? pubDate : publishedDate;
  const articleImage =
    multimedia?.length > 0
      ? type === SEARCH
        ? SEARCH_IMAGE_BASE_URL + multimedia[0]?.url
        : multimedia[0]?.url
      : null;

  return (
    <TouchableWithoutFeedback onPress={() => onPressArticle()}>
      <View style={styles.row}>
        <View style={styles.itemIndicatorContainer}>
          <Image style={styles.image} source={{uri: articleImage}} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title || leadParagraph}
          </Text>
          <Text style={styles.abstract} numberOfLines={3} ellipsizeMode="tail">
            {abstract}
          </Text>
          <Text style={styles.byline}>{articleByline}</Text>
          <View style={styles.dateContainer}>
            {articlePublishedDate && (
              <Text style={styles.articlePublishedDate}>
                {new Date(articlePublishedDate).toLocaleDateString()}{' '}
                {new Date(articlePublishedDate).toLocaleTimeString()}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ArticleItem;
