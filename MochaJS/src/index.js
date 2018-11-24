const User = require('./User')
const UserValidator = require('./UserValidator')

function RegiterUser(name, birth, email, nickname, password) {
    const userValidation = [
        UserValidator.validateName(name),
        UserValidator.validateBirth(birth),
        UserValidator.validateEmail(email),
        UserValidator.validatePassword(password, confirmPassword)
    ]

    const isInvalid = userValidation.filter(validation => validation == false)

    if (isInvalid)
        throw new UserException("It wasn't possible sign up :(")

    const newUser = new User(name, birth, email, nickname, password)

    return newUser
}