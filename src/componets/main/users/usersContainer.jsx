import { connect } from "react-redux";
import AllUsers from "./usersClass";
import {
  follow,
  unfollow,
  setCurrentPage,
  setFollowingInProgress,
  getUsers,
} from "../../redux/usersReducer";
import { AuthRedirect } from "../../../hoc/AuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totoalUsers: state.usersPage.totoalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setFollowingInProgress,
    getUsers,
  }),
  AuthRedirect
)(AllUsers);
