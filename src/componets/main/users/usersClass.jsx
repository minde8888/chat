import axios from "axios";
import React from "react";
import "./users.scss";
import userImage from "../img/last ned.png";
import Preloader from "../../common/preloader/preloader";
import { NavLink } from "react-router-dom";
import { UserApi } from "../../../api/api";
// import UsersShow from "./usersShow";

class UsersApi extends React.Component {
  componentDidMount() {
    this.props.setIsFeaching(1);

    UserApi.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.setIsFeaching(0);
      this.props.setUsers(data.items);
      this.props.setTotoalUsers(data.totalCount);
    });
  }

  onPageChanget = (p) => {
    this.props.setIsFeaching(1);
    this.props.setCurrentPage(p);
    UserApi.getUsers(p, this.props.pageSize).then((data) => {
      this.props.setIsFeaching(0);
      this.props.setUsers(data.items);
    });
  };

  render() {
    let pagesCaunt = Math.ceil(this.props.totoalUsers / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCaunt; i++) {
      pages.push(i);
    }
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}

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
          <div key={k} id={el.id} className={el.class}>
            <NavLink to={"/profile" + "/" + el.id}>
              <img
                src={el.photos.small != null ? el.photos.small : userImage}
                alt={el.alt}
              />
            </NavLink>
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
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "e55abe24-9a61-4a4e-b14b-c9f1d56896b0",
                        },
                      }
                    )
                    .then((response) => {
                      console.log(response);
                      if (response.data.resultCode === 0) {
                        this.props.unfollow(el.id);
                      }
                    });
                }}
              >
                {" "}
                follow{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "e55abe24-9a61-4a4e-b14b-c9f1d56896b0",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        this.props.follow(el.id);
                      }
                    });
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
