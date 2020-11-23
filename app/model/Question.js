class Question {
    constructor(question, type, choises, answer) {
        this.question = question;
        this.type = type;
        this.answer = answer;
        this.choises = [];
    }

    checkAnswer(answer) {
        if (answer === this.answer) {
            return true;
        } else {
            return false;
        }
    }
}

// type (choise, fill)

// if type is "fill" than choises field and answer is null
// if type is "choise" choises field is array of choises and answer field is index of correct answer

