import React from "react";

const Post = (props) => {
  return (
    <div>
      <div className="message">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg"
          alt="a"
        />
        <div className="bubble">
          Really cool stuff!
          <div className="corner"></div>
          <span>3 min</span>
        </div>
      </div>

      <div className="message right">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg"
          alt="a"
        />
        <div className="bubble">
          Can you share a link for the tutorial?
          <div className="corner"></div>
          <span>1 min</span>
        </div>
      </div>

      <div className="message">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg"
          alt="a"
        />
        <div className="bubble">
          Yeah, hold on
          <div className="corner"></div>
          <span>Now</span>
        </div>
      </div>

      <div className="message right">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg"
          alt="a"
        />
        <div className="bubble">
          Can you share a link for the tutorial?
          <div className="corner"></div>
          <span>1 min</span>
        </div>
      </div>

      <div className="message">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg"
          alt="a"
        />
        <div className="bubble">
          Yeah, hold on
          <div className="corner"></div>
          <span>Now</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
