import { combineReducers, createStore } from "redux";
import chatMessagesReducer from "./chatMessagesReducer";
import chatUsersReducer from "./chatUsersReducer";
import users from "./users";



let reducres = combineReducers({
    
    chatMessages: chatUsersReducer,
    chatMessages: chatMessagesReducer,
    chatUsers: users
});

let store = createStore(reducres);

export default store;