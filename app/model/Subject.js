class Subject {
    constructor(id, name, detail, chapters) {
        this.id = id;
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

    enroll(student) {
        this.students.push(student.id);
        student.subjects.push(this.id);
    }
}

export default Subject;