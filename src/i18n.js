import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import getLanguageSetting from './util/languages';

i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
        lng: getLanguageSetting(),
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false
        }
    });


export default i18n;
