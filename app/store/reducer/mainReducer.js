import { LOGIN } from "../action/userAction";
import { USER, DATA } from "../../data/data";

const initialState = {
    currentUser: null,
    users: USER,
    data: DATA
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            let loginUser = state.currentUser;
            loginUser = action.user;
            return { ...state, currentUser: loginUser };
        default:
            return state;
    }
}

export default mainReducer;
