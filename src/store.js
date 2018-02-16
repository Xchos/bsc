import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setLocale, loadTranslations, syncTranslationWithStore } from 'react-redux-i18n';
import { enTranslations } from '../locales/en_translations.js';
import { csTranslations } from '../locales/cs_translations.js';

const LANGUAGES = {
    EN: enTranslations,
    CS: csTranslations
};

const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(LANGUAGES));
store.dispatch(setLocale('EN'));