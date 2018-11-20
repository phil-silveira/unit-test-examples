const assert = require('assert')

const UserValidator = require('../src/UserValidator')

describe('Testing UserValidator ...', function () {
    describe('validate user name', function () {
        it('should throw exception "Invalid user name" ', function () {
            UserValidator.validateUser('')
        });
    });

});
