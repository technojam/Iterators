import * as Types from "../types/authTypes";
const intitialState = {
    isLoggedIn: false,
    user: null,
    user_id: null,
}

const authReducer = (state = intitialState, { type, payload }) => {
    switch (type) {
        case Types.SET_USER:
            state = { isLoggedIn: true, user: payload.user, user_id: payload.id }
            return state;
        case Types.RESET_USER:
            state: intitialState;
            return state;
        default:
            return state;
    }
}
export default authReducer;