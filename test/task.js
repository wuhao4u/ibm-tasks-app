var assert = require('assert');

describe('Basic Mocha String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 4);
    });
    it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});


// describe is a function which holds the collection of tests.
// It takes two parameters, first one is the meaningful name to functionality under test
// and second one is the function which contains one or multiple tests.
// We can have nested describe as well.


// it is a function again which is actually a test itself and takes two parameters,
// first parameter is name to the test and
// second parameter is function which holds the body of the test.

/* Code */
function LoginController() {
    function isValidUserId(userList, user) {
        return userList.indexOf(user) >= 0;
    }

    return {
        isValidUserId
    }
}



// The expect interface provides function for assertion.
// The should interface extends each object with a should property for assertion.
// should property gets added to the Object.Prototype, so that all object can access it through prototype chain.




