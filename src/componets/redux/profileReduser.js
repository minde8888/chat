import { profileAPI } from "../../api/api";

const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    users: [

    ],
    profile: null,
    status: ""
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getProfile = (id) => {

    return (dispatch) => {

        profileAPI.getProfile(id).then((response) => {
            if (response) {
                dispatch(setUserProfile(response.data));
            }
        });
    }
}

export const getStatus = (id) => {

    return (dispatch) => {

        profileAPI.getStatus(id).then((response) => {
            if (response) {
                dispatch(setStatus(response.data));
            }
        });
    }
}

export const updateStatus = (status) => {

    return (dispatch) => {

        profileAPI.updateStatus(status).then((response) => {
                if (response.data.resuleteCode === 0) {
                dispatch(setStatus(response.config.data));
            }
        });
    }
}

export default ProfileReducer;