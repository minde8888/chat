import { connect } from "react-redux";
import UsersApi from "./usersClass";
import {
  followAc,
  unfollowAc,
  setUsersAc,
  setCurrentPageAc,
  setTotoalUsersAc,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totoalUsers: state.usersPage.totoalUsers,
    currentPage: state.usersPage.currentPage,
  };
};

let mapDistpachToProps = (distpach) => {
  return {
    follow: (userId) => {
      distpach(followAc(userId));
    },
    unfollow: (userId) => {
      distpach(unfollowAc(userId));
    },
    setUsers: (users) => {
      distpach(setUsersAc(users));
    },
    setCurrentPage: (pageNumber) => {
      distpach(setCurrentPageAc(pageNumber));
    },
    setTotoalUsers: (totalCount) => {
      distpach(setTotoalUsersAc(totalCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDistpachToProps)(UsersApi);

export default UsersContainer;
