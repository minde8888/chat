import React from "react";

const Post = () => {
  let obj = [
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
  ];

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

  let masseges = obj.map((el, k) => (
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
