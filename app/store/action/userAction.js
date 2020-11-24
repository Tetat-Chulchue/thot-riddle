export const LOGIN = "LOGIN";
export const ADD_HISTORY = "ADD_HISTORY";

export const login = (user) => {
    return {type: LOGIN, user: user};
};

export const addHistory = (subject) => {
    return {type: ADD_HISTORY, subject: subject};
};

