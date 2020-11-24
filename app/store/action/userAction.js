export const LOGIN = "LOGIN";
export const ADD_HISTORY = "ADD_HISTORY";
export const ADD_SUBJECT = "ADD_SUBJECT";
export const ADD_CHAPTER = "ADD_CHAPTER";

export const login = (user) => {
    return {type: LOGIN, user: user};
};

export const addHistory = (subject) => {
    return {type: ADD_HISTORY, subject: subject};
};

export const addSubject = (subject) => {
    return {type: ADD_SUBJECT, subject: subject};
};

export const addChapter = (subject, chapter) => {
    return {type: ADD_CHAPTER, subject: subject, chapter: chapter};
};

