import { notesService } from '../services/notes.service';

export const createNote = title => dispatch => {
    return notesService.createNote(title).then(data => dispatch({
        type: "NOTES_CREATE",
        payload: data
    })).catch(err => console.log(err));
}

export const fetchNotes = () => dispatch => {
    notesService.fetchNotes().then(data => dispatch({
        type: "NOTES_SET",
        payload: data
    })).catch(err => console.log(err));
}

export const fetchNote = note_id => dispatch => {
    notesService.fetchNote(note_id).then(data => dispatch({
        type: "NOTES_DELETE",
        payload: data
    })).catch(err => console.log(err));
}

export const deleteNote = note_id => dispatch => {
    notesService.deleteNote(note_id).then(data => dispatch({
        type: "NOTES_DELETE",
        note_id
    })).catch(err => console.log(err));
}

export const updateNote = (note_id, title) => dispatch => {
    notesService.updateNote(note_id, title).then(data => dispatch({
        type: "NOTES_UPDATE",
        note_id, title
    })).catch(err => console.log(err));
}


