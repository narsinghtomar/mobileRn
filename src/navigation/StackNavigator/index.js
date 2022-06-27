/**
 * Stack Navigator
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  OnBoardingPage,
  LoginPage,
  SignUpPage,
  CategorizedListPage,
  ArticleListPage,
  WebViewPage,
  SearchListPage,
  SearchArticlePage,
} from '../../containers';

/**
 * Navigation Wrapper
 * Navigation Route
 */
export const ONBOARDING_PAGE_ROUTE = 'OnBoardingPage';
export const LOGIN_PAGE_ROUTE = 'LoginPage';
export const SIGNUP_PAGE_ROUTE = 'SignUpPage';
export const CATEGORIZEDLIST_PAGE_ROUTE = 'CategorizedListPage';
export const ARTICLE_LIST_PAGE_ROUTE = 'ArticleListPage';
export const WEBVIEW_PAGE_ROUTE = 'WebViewPage';
export const SEARCH_LIST_PAGE_ROUTE = 'SearchListPage';
export const SEARCH_ARTICLE_PAGE_ROUTE = 'SearchArticlePage';

/**
 * Create Stack Naviagtion
 */
const Stack = createStackNavigator();

/**
 * StackNavigator
 * @returns
 */
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ONBOARDING_PAGE_ROUTE}>
      <Stack.Screen name={ONBOARDING_PAGE_ROUTE} component={OnBoardingPage} />
      <Stack.Screen name={LOGIN_PAGE_ROUTE} component={LoginPage} />
      <Stack.Screen name={SIGNUP_PAGE_ROUTE} component={SignUpPage} />
      <Stack.Screen
        name={CATEGORIZEDLIST_PAGE_ROUTE}
        component={CategorizedListPage}
      />
      <Stack.Screen
        name={ARTICLE_LIST_PAGE_ROUTE}
        component={ArticleListPage}
      />
      <Stack.Screen name={WEBVIEW_PAGE_ROUTE} component={WebViewPage} />
      <Stack.Screen name={SEARCH_LIST_PAGE_ROUTE} component={SearchListPage} />
      <Stack.Screen
        name={SEARCH_ARTICLE_PAGE_ROUTE}
        component={SearchArticlePage}
      />
    </Stack.Navigator>
  );
};
