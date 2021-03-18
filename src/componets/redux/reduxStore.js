import { combineReducers, createStore } from "redux";
import chatMessagesReducer from "./chatMessagesReducer";
import usersReducer from "./usersReducer";
import users from "./users";



let reducres = combineReducers({
    usersPage:usersReducer,
    chatMessages: chatMessagesReducer,
    chatUsers: users
});

let store = createStore(reducres);

export default store;