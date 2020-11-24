import User from "../model/User";
import Subject from "../model/Subject";
import Chapter from "../model/Chapter";
import Exercise from "../model/Exercise";
import Question from "../model/Question";

export const USER = [
    new User("user01","pass01","teacher","https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"),
    new User("user02","pass02","students","https://i.pinimg.com/236x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888--no-face-facebook-profile.jpg"),
    new User("user03","pass03","students","https://i.pinimg.com/236x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888--no-face-facebook-profile.jpg"),
    new User("user04","pass04","students","https://i.pinimg.com/236x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888--no-face-facebook-profile.jpg"),
];

export const DATA = [
    new Subject(
        "Math",
        "Basic Math",
        [
            new Chapter(
                "Math Chapter 1",
                "Math detail 1",
                [
                    new Exercise(
                        "quiz 01",
                        "quiz",
                        [
                            new Question("What is 15 divided by 3", "choise", ["5", "1", "15", "0"], 0),
                            new Question("Which of these are prime number", "choise", ["1", "2", "4", "128"], 1),
                            new Question("Explain the quantum mechanics in simple terms", "fill", null, null),
                        ]
                    ),
                    new Exercise("quiz 02","quiz", []),
                    new Exercise("Exercise 01", "exercise", []),
                    new Exercise("Exercise 02", "exercise", []),
                ]
            ),
            new Chapter("Math Chapter 2","Math detail 2", []),
            new Chapter("Math Chapter 3","Math detail 3", [])
        ]
    ),
    new Subject("English 1", "Foundation Emglish", []),
    new Subject("CS Unplugged", "Computer Science without a computer", [])
];

// export const CHAPTER = [
//     new Chapter("Math Chapter 1","Math detail 1").addExercise(["quiz 01","quiz 02","Exercise 01","Exercise 02"]),
//     new Chapter("Math Chapter 2","Math detail 2"),
//     new Chapter("English Chapter 1","English detail 1"),

// ];

// export const EXERCISE = [
//     new Exercise("quiz 01","quiz detail 1").addQuestion(["1+1=?", "binary 10 to decimal"]),
//     new Exercise("quiz 02","quiz detail 2"),
//     new Exercise("Exercise 01","exercise detail 1"),
//     new Exercise("Exercise 02","exercise detail 2"),
// ];

// export const QUESTION = [
//     new Question("1+1=?","choise",["1","2","11","10"],"2"),
//     new Question("binary 10 to decimal","fill",null,"2"),
// ];
