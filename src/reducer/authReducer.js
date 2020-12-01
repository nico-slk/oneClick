import { LOGIN, LOGOUT } from "../constants/const";

export const authReducer = (state = {}, action) => {
    switch (action.payload) {
        case LOGIN:
            return state = {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case LOGOUT:
            return state = {}
        default:
            return state
    }
}