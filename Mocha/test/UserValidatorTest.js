const assert = require('assert')

const UserValidator = require('../src/UserValidator')

describe('Testing UserValidator ...', () => {
    describe('Name validation ...', () => {
        it('validate user with a good name', () => {
            assert.equal(UserValidator.validateName('Jaw'), true)
        })

        it('not validate a empty name', () => {
            assert.equal(UserValidator.validateName(''), false)
        })

        it('not validate a null name', () => {
            assert.equal(UserValidator.validateName(null), false)
        })
    })

    describe('Password validation ...', () => {
        it('validate strong password', () => {
            const password = 'Teste@123'
            const confirmPassword = 'Teste@123'

            assert.equal(
                UserValidator.validatePassword(password, confirmPassword),
                true
            )
        })

        it('not validate weak password ', () => {
            const password = '1234'
            const confirmPassword = '1234'

            assert.equal(
                UserValidator.validatePassword(password, confirmPassword),
                false
            )
        })

        it('not validate a password different of confirmation', () => {
            const password = 'Teste@123'
            const confirmPassword = 'Teste@12-'

            assert.equal(
                UserValidator.validatePassword(password, confirmPassword),
                false
            )
        })
    })

    describe('Birth validation', () => {
        it('validate birth on 10/02/1996', () => {
            const birth = new Date('10/02/1996')

            assert.equal(UserValidator.validateBirth(birth), true)
        })

        // it('not validate birth on tomorrow', () => {
        //     const birth = new Date()
        //     birth.setDay(birth.getDay() + 1)

        //     assert.equal(UserValidator.validateBirth(birth), false)
        // })
    })
})