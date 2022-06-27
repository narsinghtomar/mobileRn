/**
 * WebView Page
 */
import React, {useEffect, useCallback, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import {HeaderBar} from '../../components';
import {COLOR_SECONDARY} from '../../utils/colors';
import styles from './styles';

/**
 * WebViewPage
 */
function WebViewPage(props) {
  const {navigation, route} = props || {};
  const {params} = route || {};
  const {url, title, callBackFunction} = params || {};
  const [isLoading, setIsLoading] = useState(true);

  /**
   * LoadingIndicatorView
   */
  const LoadingIndicatorView = () => {
    return (
      <View style={styles.loaderContainer}>
        <View style={styles.indicator}>
          <ActivityIndicator
            size={'large'}
            animating={isLoading}
            color={COLOR_SECONDARY}
          />
        </View>
      </View>
    );
  };
  const backAction = useCallback(() => {
    callBackFunction && callBackFunction();
  }, [callBackFunction]);

  useEffect(() => {
    const backHandler = navigation?.addListener('beforeRemove', backAction);
    return () => backHandler?.remove?.();
  }, [backAction, navigation]);

  /**
   *
   */
  return (
    <View style={styles.container}>
      <HeaderBar
        headerText={title}
        navigation={navigation}
        callBackFunction={callBackFunction}
      />
      {isLoading && LoadingIndicatorView()}
      <WebView
        incognito={true}
        style={isLoading && styles.loading}
        originWhitelist={['*']}
        source={{url}}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}
export default WebViewPage;
