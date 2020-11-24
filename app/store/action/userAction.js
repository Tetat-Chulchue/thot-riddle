export const LOGIN = "LOGIN";
export const ADD_HISTORY = "ADD_HISTORY";
export const ADD_SUBJECT = "ADD_SUBJECT";
export const ADD_CHAPTER = "ADD_CHAPTER";
export const CREATE_QUIZ = "CREATE_QUIZ";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const ADD_STUDENT = "ADD_STUDENT";


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

export const createQuiz = (subject, chapter, quiz) => {
    return {type: CREATE_QUIZ, subject: subject, chapter: chapter, quiz: quiz};
};

export const createQuestion = (subject, chapter, quiz, question) => {
    return {type: CREATE_QUESTION, subject: subject, chapter: chapter, quiz: quiz, question: question};
};

export const addStudent = (user, subject) => {
    return {type: ADD_STUDENT, user: user, subject: subject}
}

