import { UPDATE_USER } from "../action/userAction";

const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER:
            let loginUser = state.user;
            loginUser = action.user;
            return { ...state, user: loginUser };
        default:
            return state;
    }
}

export default userReducer;
