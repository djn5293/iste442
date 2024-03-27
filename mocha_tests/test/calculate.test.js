const assert = require('assert');
const calculator = require('../calculate');

describe('Testing Calculator Outputs', () => {
    it('Calculate the correct sum of two values', () => {
        let o = calculator.add(1, 2);

        assert.equal(3, o, 'Expected the calculated value to be 3.');
        //Put the expected value first.
        //Error message is the third argument.
    });

    it('Calculate the incorrect sum of two values', ()=>{
        let o = calculator.add(3,5);

        assert.notEqual(null, o, 'Expected add to return something.')
        assert.notEqual(3, o, 'Expected the value to not be 3');
    });

    it('Calculate the output of a string being passed in', ()=>{
        let o = calculator.add("someString",5);

        assert.equal(NaN, o, 'Expected the value to not be a number (NaN)');
    });

    it('Calculate the output of a string passed in that can be passed', ()=>{
        let o = calculator.add("3",5);

        assert.equal(8, o, 'Expected the value to be 8');
    });
});