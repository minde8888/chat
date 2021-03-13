const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {

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

}

const chatUsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:         
            state.newMessageText = action.messageText;
            break;
        case SEND_MESSAGE:
            let content = state.newMessageText;
            state.newMessageText = "";
            let newMessage = ({
                class: "message right",
                name: "Martin Joseph",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
                alt: "martin",
                id: "7",
                content: content,
                time: "1 min"
            })
            state.posts.push(newMessage);
            break;
        default:
            break;
    }
    return state;
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const uppdateMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, messageText: text
})

export default chatUsersReducer;