
import axios from 'axios';
export const API_URL = "http://localhost:8000/api"; // "http://private-9aad-note10.apiary-mock.com"; 

export const notesService = {
    fetchNotes: () => {
        return axios.get(API_URL + "/notes");
    },
    fetchNote: note_id => {
        return axios.get(API_URL + "/notes/" + note_id);
    },
    createNote: (title = '') => {
        return axios.post(API_URL + "/notes?title=" + title);
    },
    updateNote: (note_id, title = '') => {
        return axios.put(API_URL + "/notes/" + note_id + "?title=" + title);
    },
    deleteNote: (note_id) => {
        return axios.delete(API_URL + "/notes/" + note_id);
    }
}