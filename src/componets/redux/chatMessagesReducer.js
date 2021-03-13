
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const chatMessagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newMessage = {
                class: "message",
                name: "Miro Badev",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                alt: "miro",
                id: "1",
                content: state.newMessage,
                time: "now",
            }
            state.posts.push(newMessage);
            state.newMessage = " ";
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newMessage = action.text;
            break;
        default:
            break;
    }

    return state;
}

export const addPostAction = () => ({ type: ADD_POST })
export const uppdateAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT, text: text
})

export default chatMessagesReducer;