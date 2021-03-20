const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURENT_PAGE = "SET-CURENT-PAGE";
const SET_TOTAL_USERS = "SET-TOTAL-USERS";

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
                // ...state, users: [...state.users, ...action.users]
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
        default:
            return state;
    }
}

export const followAc = (userId) => ({ type: FOLLOW, userId });
export const unfollowAc = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAc = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAc = (currentPage) => ({ type: SET_CURENT_PAGE, currentPage })
export const setTotoalUsersAc = (totoalUsers) => ({ type: SET_TOTAL_USERS, count: totoalUsers })

export default usersReducer;