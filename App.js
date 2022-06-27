/**
 * App
 */
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';

import {DefaultLanguage, setI18nConfig, strings} from './src/i18n';
import {loadLanguageCode, saveLanguage} from './src/utils/storage';
import {LocalizationProvider} from './src/i18n/translations';
import {snackBarstyle} from './src/utils/styles/snackBar';
import {SnackBar, HideSnackBar} from './src/components';
import {isNonEmptyString} from './src/utils/helper';
import configureStore from './src/redux/store';
import Navigator from './src/navigation';

// Store
const {store, persistor} = configureStore();

/**
 * App
 * @returns
 */
function App() {
  const [loadUi, setLoadUi] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const _setNavigationRef = () => {
    /* TODO document why this arrow function is empty */
  };
  /**
   *
   */
  useEffect(() => {
    const getAppConfig = async () => {
      const userLanguage = await loadLanguageCode();
      const lang = isNonEmptyString(userLanguage)
        ? userLanguage
        : DefaultLanguage;
      setI18nConfig(lang);
      await saveLanguage(lang);
      setLoadUi(true);
      if (!userLanguage) {
        setTimeout(() => {
          // If We are using the Arabic, We will restart the app.
        }, 100);
      }
    };
    getAppConfig();
  });

  /**
   * Subscribe / Unsubscribe to network state updates
   */
  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribeNetInfo = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected);
    });
    return () => {
      // Unsubscribe to network state updates
      unsubscribeNetInfo();
    };
  }, [setIsOnline]);

  /**
   * Showing the Network SnackBar based on ONLINE / OFFINE Status
   */
  useEffect(() => {
    if (!isOnline && loadUi) {
      SnackBar(strings('app.nointernet'), 4, strings('app.nointernetDesc'));
    } else if (isOnline) {
      HideSnackBar();
    }
  }, [isOnline, loadUi]);

  return (
    <>
      {loadUi && <Navigator setNavigationRef={_setNavigationRef} />}
      <FlashMessage position="top" titleStyle={snackBarstyle.flash} />
    </>
  );
}

/**
 * RootWrapper
 */
const RootWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocalizationProvider>
          <App />
        </LocalizationProvider>
      </PersistGate>
    </Provider>
  );
};
export default RootWrapper;
