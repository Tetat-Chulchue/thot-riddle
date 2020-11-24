class Exercise {
    constructor(name, type, questions) {
        this.name = name;
        this.type = type;
        this.questions = questions;
    }

    addQuestion(question) {
        this.questions.push(question);
    };
}

export default Exercise;

// type (exercise, quiz)