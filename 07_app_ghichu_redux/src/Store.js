import { firebaseConnect } from "./firebaseConnect";

var redux = require("redux");

const notInitialState = {
    isEdit: false,
    editItem: {}
}
const allReducer = (state = notInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            firebaseConnect.push(action.nhanvao);
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state, isEdit: !state.isEdit}
        case "GET_EDIT_DATA":
            return {...state, editItem: action.editObject}
        case "EDIT":
            firebaseConnect.child(action.nhanvao.id).update({
                noteTitle: action.nhanvao.noteTitle,
                noteContent: action.nhanvao.noteContent
            });
            return {...state, editItem: {}}
        case "DELETE":
            firebaseConnect.child(action.deleteId).remove();
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})

export default store;