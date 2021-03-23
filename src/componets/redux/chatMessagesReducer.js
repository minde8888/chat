
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
    newMessage: ""
}

const chatMessagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newMessage: "",
                posts: [...state.posts,
                {
                    class: "message",
                    name: "Miro Badev",
                    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                    alt: "miro",
                    id: "1",
                    content: state.newMessage,
                    time: "now",
                }
                ]
            }
        
        }
        case UPDATE_NEW_POST_TEXT: {
             return {
                ...state,
                newMessage: action.text
            }
        }
        default:
            return state;
    }

}

export const addPostAction = () => ({ type: ADD_POST })
export const uppdateAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT, text: text
})

export default chatMessagesReducer;