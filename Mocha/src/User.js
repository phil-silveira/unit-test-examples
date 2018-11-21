class User {
    constructor(name, email, birth, nickname, password) {
        this.name = name
        this.email = email
        this.birth = new Date(birth)

        this.nickname = nickname
        this.password = password
    }
}

module.exports = User;
