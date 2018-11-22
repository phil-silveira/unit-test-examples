var User = require('./User')

class UserValidator {
    static validateName(name) {
        return !this.isEmpty(name)
    }

    static validatePassword(password, confirmPassword) {
        if (!this.isEmpty(password) && (password === confirmPassword)) {
            const strongRegEx = new RegExp(
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
            );

            return (password.match(strongRegEx)) ? true : false
        }
        return false
    }

    static validateEmail(email) {
        if (this.isEmpty(email))
            return false

        const validation = email.match(/\w.*\w@\w+mail.\w+/)

        return (validation) ? (email === validation[0]) : false
    }

    static validateBirth(birth) {
        const now = new Date()

        return (typeof birth === 'object') && birth < now
    }

    static isEmpty(field) {
        return !(field && field.trim() !== '')
    }
}

module.exports = UserValidator