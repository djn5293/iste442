module.exports = {
    execute: function(x, y, operator) {
        if (operator === '+') {
            return this.add(x, y);
        }

        if (operator === '-') {
            return this.subtract(x, y);
        }

        if (operator === '*') {
            return this.multiply(x, y);
        }

        if (operator === '/' || operator === '\\') {
            return this.divide(x, y);
        }
    },
    add: function(x, y) {
        x = parseFloat(x);
        y = parseFloat(y);
        return x + y;
    },
    subtract: function(x, y) {
        x = parseFloat(x);
        y = parseFloat(y);
        return x - y;
    },
    multiply: function(x, y) {
        x = parseFloat(x);
        y = parseFloat(y);
        return x * y;
    },
    divide: function(x, y) {
        x = parseFloat(x);
        y = parseFloat(y);
        return x / y;
    }
};