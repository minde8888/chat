import Post from "./post";
import { addPostAction, uppdateAction } from "../../redux/chatMessagesReducer";
import { connect } from "react-redux";
import { AuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";

// const PostContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = () => {
//     props.store.dispatch(addPostAction());
//   };

//   let onMassegeChange = (text) => {
//     const action = uppdateAction(text);
//     props.store.dispatch(action);
//   };
//   return (
//     <Post
//       uppdate={onMassegeChange}
//       addPost={addPost}
//       posts={state.chatMessages.posts}
//       newMessage={state.chatMessages.newMessage}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.chatMessages.posts,
    newMessage:state.chatMessages.newMessage,
  };
};

let mapDistpachToProps = (dispatch) => {
  return {
    update: (text) => {
      const action = uppdateAction(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostAction());
    },
  };
};

export default compose(connect(mapStateToProps, mapDistpachToProps), AuthRedirect)(Post);
