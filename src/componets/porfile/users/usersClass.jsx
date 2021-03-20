import axios from "axios";
import React from "react";
import "./users.scss";
import userImage from "../img/last ned.png";
// import UsersShow from "./usersShow";

class UsersApi extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotoalUsers(response.data.totalCount);
      });
  }

  onPageChanget = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    // return <UsersShow props={this.props} onPageChanget={this.onPageChanget} />;
    let pagesCaunt = Math.ceil(this.props.totoalUsers / this.props.pageSize);

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
                  this.onPageChanget(p);
                }}
                key={k}
                className={this.props.currentPage === p ? "clicked" : ""}
              >
                {p}
              </span>
            );
          })}
        </div>
        {this.props.users.map((el, k) => (
          <div key={k} id={this.props.id} className={el.class}>
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
                  this.props.unfollow(el.id);
                }}
              >
                follow
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.follow(el.id);
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
}

export default UsersApi;
