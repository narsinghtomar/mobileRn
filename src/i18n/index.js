/**
 * Locale
 */
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import {I18nManager} from 'react-native';
import {AR, EN} from '../utils/constants/constants';

export const DefaultLanguage = EN;

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./locales/en.json'),
  ar: () => require('./locales/ar.json'),
};

export const setI18nConfig = appLang => {
  const isRTLBool = appLang === AR ? true : false;
  i18n.fallbacks = true;

  const translations = appLang ? [appLang] : Object.keys(translationGetters);

  const fallback = {
    languageTag: appLang ?? DefaultLanguage,
    isRTL: isRTLBool,
  };

  const {languageTag} =
    RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || fallback;
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
  I18nManager.forceRTL(isRTLBool);
};

// The method we'll use instead of a regular string
export function strings(key, params = {}) {
  return key ? i18n.t(key, params) : null;
}
export function getLocale() {
  return i18n.locale;
}
export function getLocaleInitials() {
  return i18n.locale.slice(0, 2);
}
export function isRTL() {
  return I18nManager.isRTL;
}

export default i18n;
