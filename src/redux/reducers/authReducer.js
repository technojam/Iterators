
const intitialState = {
    isLoggedIn: false,
    user: null,
    user_id: null,
}

const authReducer = (state = intitialState, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
}
export default authReducer;