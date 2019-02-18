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

    describe('Birth validation ...', () => {
        it('validate birth on 10/02/1996', () => {
            const birth = new Date('10/02/1996')

            assert.equal(UserValidator.validateBirth(birth), true)
        })

        it('not validate birth on next month', () => {
            const birth = new Date()
            birth.setMonth(birth.getMonth() + 1)

            assert.equal(UserValidator.validateBirth(birth), false)
        })
    })

    describe('Email validation ...', () => {
        it('validate good email', () => {
            const email = 'jaw.www@gmail.com'

            assert.equal(UserValidator.validateEmail(email), true)
        })

        it('not validate email without @', () => {
            const email = 'jaw.wwwgmail.com'

            assert.equal(UserValidator.validateEmail(email), false)
        })
    })

    describe("It's only a test template", () => {
        // hooks
        before(() => {
            // It's run before all tests in this block
        })

        beforeEach(() => {
            // It's run before each test in this block
        })

        after(() => {
            // It's run after all tests in this block
        })
        afterEach(() => {
            // It's run after each test in this block
        })

        // test cases
        it('validate hello world', () => {
            //...
            assert.ok('Hello World :)')
        })
    })
})