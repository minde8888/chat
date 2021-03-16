
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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

const chatMessagesReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case ADD_POST: {
            let newMessage = {
                class: "message",
                name: "Miro Badev",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                alt: "miro",
                id: "1",
                content: state.newMessage,
                time: "now",
            }
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newMessage);
            // stateCopy.posts.push(newMessage);
            stateCopy.newMessage = "";
            break;
        }
        case UPDATE_NEW_POST_TEXT: {
                       stateCopy.newMessage = action.text;
            break;
        }
        default:
            break;
    }

    return stateCopy;
}

export const addPostAction = () => ({ type: ADD_POST })
export const uppdateAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT, text: text
})

export default chatMessagesReducer;