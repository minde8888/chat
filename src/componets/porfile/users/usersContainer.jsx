import { connect } from "react-redux";
import UsersApi from "./usersClass";
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotoalUsers,
  setIsFeaching,
} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totoalUsers: state.usersPage.totoalUsers,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {follow,  unfollow,  setUsers,  setCurrentPage,  setTotoalUsers,  setIsFeaching,})(UsersApi);

export default UsersContainer;
