import { combineReducers } from 'redux';

// reducers:
import notesReducer from './notes.reducer';

// rootReducer
export default combineReducers({
    notes: notesReducer
});