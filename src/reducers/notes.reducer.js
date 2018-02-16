export default function (state = [], action) {

    switch (action.type) {
        case "NOTES_CREATE":
            console.log(action.payload.data);
            return [
                ...state,
                { ...action.payload.data }
            ];
        case "NOTES_SET":
            return action.payload.data;
        case "NOTES_DELETE":
            return state.filter(note => note.id !== action.note_id);
        case "NOTES_UPDATE":
            return state.map(note => {
                if (note.id == action.note_id) {
                    note.title = action.title;
                };
                return note;
            });
        default:
            return state;
    }

}
