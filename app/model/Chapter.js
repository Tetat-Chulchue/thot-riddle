class Chapter {
    constructor(name, detail, exercises) {
        this.name = name;
        this.detail = detail;
        this.exercises = exercises;
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
    }
}

export default Chapter;