import  chatMessagesReducer  from "./chatMessagesReducer";
import  chatUsersReducer  from "./chatUsersReducer";
import  sideBarReducer  from "./users";


let store = {
    _state: {
        chatMessages: {
            posts: [
                {
                    class: "message",
                    name: "Miro Badev",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                    alt: "miro",
                    id: "1",
                    content: "Really cool stuff!",
                    time: "3 min",
                },
                {
                    class: "message right",
                    name: "Martin Joseph",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
                    alt: "martin",
                    id: "2",
                    content: "Can you share a link for the tutorial?",
                    time: "1 min",
                },
                {
                    class: "message",
                    name: "Miro Badev",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                    alt: "miro",
                    id: "3",
                    content: "Yeah, hold on",
                    time: "Now",
                },
                {
                    class: "message right",
                    name: "Martin Joseph",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
                    alt: "martin",
                    id: "4",
                    content: "Can you share a link for the tutorial?",
                    time: "1 min",
                },
                {
                    class: "message",
                    name: "Miro Badev",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                    alt: "miro",
                    id: "5",
                    content: " Yeah, hold on",
                    time: "Now",
                },
            ],
            newMessage: " ",
            newMessageText: "",
        },
        chatUsers: {
            users: [
                {
                    name: "Miro Badev",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                    alt: "miro",
                    id: "1",
                    status: "status"
                },
                {
                    name: "Martin Joseph",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
                    alt: "martin",
                    id: "2",
                    status: "away"
                },
                {
                    name: "Tomas Kennedy",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg",
                    alt: "tomas",
                    id: "3",
                    status: "away"
                },
                {
                    name: "Enrique Sutton",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg",
                    alt: "enrique",
                    id: "4",
                    status: "inactive"
                },
                {
                    name: "Darnell Strickland",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg",
                    alt: "darnell",
                    id: "5",
                    status: "inactive"
                },
            ],

        },
        sideBar: {}
    },
    _rerenderEntireTree() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {

        this._state.chatMessages = chatMessagesReducer(this._state.chatMessages, action)
        this._state.chatMessages = chatUsersReducer(this._state.chatMessages, action)
        this._state.sideBa =  sideBarReducer(this._state.sideBarReducer, action)

        this._rerenderEntireTree(this._state);


    }
}





export default store;