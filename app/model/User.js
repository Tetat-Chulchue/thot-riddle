class User {
    constructor(username, password, role, profileImage) {
        this.username = username;
        this.password = password;
        this.profileImage = profileImage;
        this.role = role;
        this.subjects = [];
        this.history = [];
        this.trophies = [];
        this.achievements = [];
    }

    updateHistoty() {}
    enroll() {}
}