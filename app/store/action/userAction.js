export const REGISTER = "REGISTER";

export const register = (user) => {
    return {type: REGISTER, user: user};
};

