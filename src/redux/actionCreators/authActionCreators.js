import * as Types from "../types/authTypes";

const setUser = (data) => ({
    type: Types.SET_USER,
    payload: data
})

const resetUser = () => ({
    type: Types.RESET_USER,
})

const loginUser = (data) => (dispatch) => {
    dispatch(setUser(data));
}
const logoutUser = (data) => (dispatch) => {
    dispatch(resetUser());
}

export { loginUser, logoutUser }