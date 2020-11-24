import { LOGIN, ADD_HISTORY, ADD_SUBJECT, ADD_CHAPTER } from "../action/userAction";
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
        default:
            return state;
    }
}

export default mainReducer;
