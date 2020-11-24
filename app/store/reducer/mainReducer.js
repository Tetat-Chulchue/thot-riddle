import { LOGIN, ADD_HISTORY } from "../action/userAction";
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
        case ADD_HISTORY:
            let user = state.currentUser;
            if (!(user.history.includes(action.subject))) {
                user.history.push(action.subject);
            }
            return {...state, currentUser: user}
        default:
            return state;
    }
}

export default mainReducer;
