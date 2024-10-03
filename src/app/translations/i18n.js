import i18n from 'i18next';
import Cookies from 'js-cookie';
import { translationsEN } from './lang_en';
import { translationsVI } from './lang_vi';
import { initReactI18next } from 'react-i18next';
import { CONSTANTS } from '../../constants/CONSTANTS';
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translations: translationsEN,
  },
  vi: {
    translations: translationsVI,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: Cookies.get('i18nextLng') || CONSTANTS.LANG_VI,
    fallbackLng: CONSTANTS.LANG_VI,
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
    },

    react: {
      wait: true,
    },
  });

export default i18n;