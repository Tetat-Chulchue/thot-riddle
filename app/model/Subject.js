class Subject {
    constructor(name, detail) {
        this.name = name;
        this.detail = detail;
        this.students = [];
        this.chapters = [];
    }

    addStudent(student) {
        this.students.push(student);
    }
    addChapter(chapter) {
        this.chapters.push(chapter);
    }
}

export default Subject;