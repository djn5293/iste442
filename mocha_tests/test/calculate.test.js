const assert = require('assert');
const calculator = require('../calculate');

describe('Testing Calculator Outputs', () => {
    it('Calculate the correct sum of two values', () => {
        let o = calculator.add(1, 2);

        assert.equal(3, o, 'Expected the calculated value to be 3.');
    });
});