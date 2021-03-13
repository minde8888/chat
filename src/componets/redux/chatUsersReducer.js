const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";


const chatUsers = (state, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {

        state.newMessageText = action.messageText;

    } else if (action.type === SEND_MESSAGE) {
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
       
        
    }
    return state;
}

export const sendMessage = () => ({ type: SEND_MESSAGE })
export const uppdateMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, messageText: text
})

export default chatUsers;