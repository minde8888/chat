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
            newMessage: " labas",
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
            ]
        }
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
        if (action.type === "ADD-POST") {
            let newMessage = {
                class: "message",
                name: "Miro Badev",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                alt: "miro",
                id: "1",
                content: this._state.chatMessages.newMessage,
                time: "now",
            }
            this._state.chatMessages.posts.push(newMessage);
            this._state.chatMessages.postText = " ";
            this._rerenderEntireTree(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.chatMessages.newMessage = action.text;
            this._rerenderEntireTree(this._state);
        }
    }
}

export default store;