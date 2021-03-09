import React from "react";

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

  return <div>{masseges}</div>;
};

export default Post;
