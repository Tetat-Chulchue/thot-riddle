import User from "../model/User";
import Subject from "../model/Subject";
import Chapter from "../model/Chapter";
import Exercise from "../model/Exercise";
import Question from "../model/Question";

export const DATA = [
    new Subject(
        1,
        "Introduction tp Math 1",
        "This is subject about Basic Math",
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
                    new Exercise("quiz 02", "quiz", [
                        new Question("QUIZ2: What is 15 divided by 3", "choise", ["5", "1", "15", "0"], 0),
                        new Question("QUIZ2: Which of these are prime number", "choise", ["1", "2", "4", "128"], 1),
                        new Question("QUIZ2: Explain the quantum mechanics in simple terms", "fill", null, null),
                    ]),
                    new Exercise("Exercise 01", "exercise", [
                        new Question("EXERCISE1: What is 15 divided by 3", "choise", ["5", "1", "15", "0"], 0),
                        new Question("EXERCISE1: Which of these are prime number", "choise", ["1", "2", "4", "128"], 1),
                        new Question("EXERCISE1: Explain the quantum mechanics in simple terms", "fill", null, null),
                    ]),
                    new Exercise("Exercise 02", "exercise", []),
                ]
            ),
            new Chapter("Math Chapter 2","Math detail 2", []),
            new Chapter("Math Chapter 3","Math detail 3", [])
        ]
    ),
    new Subject(2, "English 1", "Foundation Emglish", []),
    new Subject(3, "CS Unplugged", "Computer Science without a computer", []),
];

export const USER = [
    new User(1,
        "user01",
        "pass01",
        "teacher",
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        [
            DATA[0],
            DATA[1],
            DATA[2],
        ]
    ),
    new User(2, "user02","pass02","student","https://i.pinimg.com/236x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888--no-face-facebook-profile.jpg", [DATA[1], DATA[2]]),
    new User(3, "user03","pass03","student","https://i.pinimg.com/236x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888--no-face-facebook-profile.jpg", []),
    new User(4, "user04","pass04","student","https://i.pinimg.com/236x/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888--no-face-facebook-profile.jpg", []),
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

