import { LOGIN, ADD_HISTORY, ADD_SUBJECT, ADD_CHAPTER, CREATE_QUIZ, CREATE_QUESTION, ADD_STUDENT } from "../action/userAction";
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
            let historyUser = state.currentUser;
            if (!(historyUser.history.includes(action.subject))) {
                historyUser.history.push(action.subject);
            }
            return {...state, currentUser: historyUser}
        case ADD_SUBJECT:
            let subjectData = state.data;
            let subjectUser = state.currentUser;
            subjectData.push(action.subject);
            subjectUser.subjects.push(subjectData[subjectData.length - 1]);
            return {...state, currentUser: subjectUser, data: subjectData}
        case ADD_CHAPTER:
            let chapterData = state.data;
            let subject = chapterData[chapterData.indexOf(action.subject)];
            subject.addChapter(action.chapter);
            return {...state, data: chapterData}
        case CREATE_QUIZ:
            let quizData = state.data;
            let subjectOfQuiz = (quizData[quizData.indexOf(action.subject)])
            let chapterOfQuiz = subjectOfQuiz.chapters[subjectOfQuiz.chapters.indexOf(action.chapter)]
            console.log(chapterOfQuiz)
            chapterOfQuiz.addExercise(action.quiz)
            return {...state, data: quizData}
        case CREATE_QUESTION:
            let questionData = state.data;
            let subjectOfQuestion = (questionData[questionData.indexOf(action.subject)])
            let chapterOfQuestion = subjectOfQuestion.chapters[subjectOfQuestion.chapters.indexOf(action.chapter)]
            let quizOfQuestion = chapterOfQuestion.exercises[chapterOfQuestion.exercises.indexOf(action.quiz)]
            console.log(subjectOfQuestion)
            console.log(chapterOfQuestion)
            console.log(quizOfQuestion)
            quizOfQuestion.addQuestion(action.question);
            return {...state, data: questionData}
        case ADD_STUDENT:
            let studentData = state.data;
        default:
            return state;
    }
}

export default mainReducer;
