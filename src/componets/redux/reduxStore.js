import { combineReducers, createStore } from "redux";
import chatMessagesReducer from "./chatMessagesReducer";
import usersReducer from "./usersReducer";
import users from "./users";
import profileReducer from "./profileReduser";

let reducres = combineReducers({
    usersPage:usersReducer,
    chatMessages: chatMessagesReducer,
    chatUsers: users,
    profilePage:profileReducer

});

let store = createStore(reducres);

window.store = createStore(reducres)
export default store;