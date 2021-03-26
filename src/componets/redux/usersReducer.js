import { UsersAPI } from "../../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURENT_PAGE = "SET-CURENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FALLOWING_PROGRESS = "TOGGLE_IS_FALLOWING_PROGRESS";
let initialState = {
    users: [

        // {
        //     follow: false,
        //     class: "message",
        //     name: "Miro Badev",
        //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
        //     alt: "miro",
        //     id: "1",
        //     status: "Really cool stuff!",
        //     time: "3 min",
        //     location: {
        //         city: "Oslo",
        //         country: "Norway",
        //     },


    ],
    pageSize: 5,
    totoalUsers: 0,
    currentPage: 1,
    isFetching: null,
    followingInProgress: []

}



const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS:
            return {
                ...state, totoalUsers: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FALLOWING_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURENT_PAGE, currentPage })
export const setTotoalUsers = (totoalUsers) => ({ type: SET_TOTAL_USERS, count: totoalUsers })
export const setIsFeaching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FALLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(setIsFeaching(1));

        UsersAPI.getUsers(currentPage, pageSize).then(
            (data) => {
                dispatch(setIsFeaching(0));
                dispatch(setUsers(data.items));
                dispatch(setTotoalUsers(data.totalCount));
            }
        );
    }
}

export const follow = (id) => {

    return (dispatch) => {
        dispatch(setFollowingInProgress(true, id));
        UsersAPI.follow(id).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(id));
            }
            dispatch(setFollowingInProgress(false, id));
        });
    }
}

export const unfollow = (id) => {

    return (dispatch) => {
        dispatch(setFollowingInProgress(true, id));
        UsersAPI.unfollow(id).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(id));
            }
            dispatch(setFollowingInProgress(false, id));
        });
    }
}

export default usersReducer;