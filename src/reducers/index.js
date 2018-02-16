import { combineReducers } from 'redux';

// reducers:
import notesReducer from './notes.reducer';
import { setLocale, loadTranslations, syncTranslationWithStore, i18nReducer } from 'react-redux-i18n';


// rootReducer
export default combineReducers({
    notes: notesReducer,
    lang: i18nReducer
});