var User = require('./User')

class UserValidator {
    static validateUser(name, email, birth, nickname, password, confirmPassword) {
        if (name.trim() === '')
            throw 'Invalid user name'

        return true
    }
}

module.exports = UserValidator