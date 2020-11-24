class User {
    constructor(username, password, role, profileImage, subjects) {
        this.username = username;
        this.password = password;
        this.profileImage = profileImage;
        this.role = role;
        this.subjects = subjects;
        this.history = [];
        this.trophies = [];
        this.achievements = [];
    }

    updateHistoty() {}
    enroll() {}
}

export default User;