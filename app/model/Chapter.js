class Chapter {
    constructor(name, detail) {
        this.name = name;
        this.detail = detail;
        this.exercises = [];
    }

    addExercise(exercise) {
        this.exercises.push(exercise);
    }
}