class User {
    constructor(id, username, password, role, profileImage, subjects) {
        this.id = id;
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
}

export default User;