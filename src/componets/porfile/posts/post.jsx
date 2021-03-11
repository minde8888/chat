import React from "react";
import Redo from "../chat/svg/redo";

const Post = (props) => {
  const Message = (props) => {
    return (
      <div id={props.id} className={props.class}>
        <img src={props.src} alt={props.alt} />
        <div className="bubble">
          {props.content}
          <div className="corner"></div>
          <span>{props.time} </span>
        </div>
      </div>
    );
  };

  let masseges = props.posts.map((el, k) => (
    <Message
      key={k}
      class={el.class}
      src={el.src}
      alt={el.alt}
      id={el.id}
      content={el.content}
      time={el.time}
    />
  ));

  let postText = React.createRef();
  
  let add = () => {
    props.dispatch({type:"ADD-POST"});
  };

  let onMassegeChange = () => {
    let text = postText.current.value;
    const newLocal = { type: "UPDATE-NEW-POST-TEXT", text: text };
    props.dispatch(newLocal);
  };
  
  return (
    <div className="chatbox">
      {masseges}
      <div id="sendmessage">
        <input
          onChange={onMassegeChange}
          ref={postText}
          type="text"
          value={props.newMessage}
        />
        <button onClick={add} id="send">
          <Redo />
        </button>
      </div>
    </div>
  );
};

export default Post;
