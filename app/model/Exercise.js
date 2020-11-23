class Exercise {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.questions = [];
    }

    addQuestion(question) {
        this.questions.push(question);
    };
}

export default Exercise;

// type (exercise, quiz)