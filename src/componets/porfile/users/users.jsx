import React from "react";

import "./users.scss";
const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        follow: false,
        class: "message",
        name: "Miro Badev",
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
        alt: "miro",
        id: "1",
        status: "Really cool stuff!",
        time: "3 min",
        location: {
          city: "Oslo",
          country: "Norway",
        },
      },
      {
        follow: true,
        class: "message right",
        name: "Martin Joseph",
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
        alt: "martin",
        id: "2",
        status: "Can you share a link for the tutorial?",
        time: "1 min",
        location: {
          city: "Vilnius",
          country: "Lithuania",
        },
      },
      {
        follow: true,
        class: "message",
        name: "Miro Badev",
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
        alt: "miro",
        id: "3",
        status: "Yeah, hold on",
        time: "Now",
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
      {
        follow: false,
        class: "message right",
        name: "Martin Joseph",
        src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
        alt: "martin",
        id: "4",
        status: "Can you share a link for the tutorial?",
        time: "1 min",
        location: {
          city: "Oslo",
          country: "Norway",
        },
      },
    ]);

  }

  return (
    <div>
      {props.users.map((el, k) => (
        <div key={k} id={props.id} className={el.class}>
          <img src={el.src} alt={el.alt} />
          <div className="bubble">
            {el.name}
            <div>
              <div>{el.status}</div>
              <div>{el.city}</div>
              <div>{el.country}</div>
            </div>
            <div className="corner"></div>
            <span>{el.time} </span>
          </div>
          {el.follow ? (
            <button
              onClick={() => {
                props.unfollow(el.id);
              }}
            >
              follow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(el.id);
              }}
            >
              unfollow
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
