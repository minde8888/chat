import React from "react";
import userImage from "../img/last ned.png";

let UsersShow = (props) => {

  let pagesCaunt = Math.ceil(props.totoalUsers / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCaunt; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className="pagination">
        {pages.map((p, k) => {
          return (
            <span
              onClick={() => {
                props.onPageChanget(p);
              }}
              key={k}
              className={props.currentPage === p ? "clicked" : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((el, k) => (
        <div key={k} id={el.id} className={el.class}>
          <img
            src={el.photos.small != null ? el.photos.small : userImage}
            alt={el.alt} 
          />
          <div className="bubble">
            {el.name}
            <div>
              <div>{el.status}</div>
              <div>{"el.city"}</div>
              <div>{"el.country"}</div>
            </div>
            <div className="corner"></div>
            <span>{"el.time"} </span>
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
}

export default UsersShow;
