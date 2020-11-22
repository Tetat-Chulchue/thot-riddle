import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import SubjectDetail from '../screen/SubjectDetail';
import MiniSubjectDetail from '../screen/taggy/MiniSubjectDetail';
import ChapterDetail from '../screen/taggy/ChapterDetail';
import ExercisePage from '../screen/taggy/ExercisePage';
// import QuizPage from '../screen/taggy/QuizPage';
// import CreateSubject from '../screen/taggy/CreateSubject';
// import CreateChapter from '../screen/taggy/CreateChapter';
// import CreateQuiz from '../screen/taggy/CreateQuiz';

const subjectNav = createStackNavigator({
    subjDetail: {
        screen: SubjectDetail
    },
    miniSubjDetail: {
        screen: MiniSubjectDetail
    },
    chapDetail: {
        screen: ChapterDetail
    },
    exercisePage: {
        screen: ExercisePage
    },
    // quizPage: {
    //     screen: QuizPage
    // },
},
    {
        defaultNavigationOptions: {
            headerShown: false,
        }
    }
);

// const createNav = createStackNavigator({
//     createSubject: {
//         screen: CreateSubject
//     },
//     createChapter: {
//         screen: CreateChapter
//     },
//     createQuiz: {
//         screen: CreateQuiz
//     },
// });

// const mainNav = createStackNavigator({
//     subjectNav: {
//         screen: subjectNav
//     },
//     createNav: {
//         screen: createNav
//     },
// })

const MainNavigation = createAppContainer(subjectNav);

export default MainNavigation;