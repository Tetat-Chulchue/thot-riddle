class Subject {
    constructor(name, detail, chapters) {
        this.name = name;
        this.detail = detail;
        this.chapters = chapters;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }
    addChapter(chapter) {
        this.chapters.push(chapter);
    }
}

export default Subject;