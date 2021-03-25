import { applyMiddleware, combineReducers, createStore } from "redux";
import chatMessagesReducer from "./chatMessagesReducer";
import usersReducer from "./usersReducer";
import users from "./users";
import profileReducer from "./profileReduser";
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk";

let reducres = combineReducers({
    usersPage: usersReducer,
    chatMessages: chatMessagesReducer,
    chatUsers: users,
    profilePage: profileReducer,
    auth: authReducer
});

let store = createStore(reducres, applyMiddleware(thunkMiddleware));

window.store = createStore(reducres)
export default store;