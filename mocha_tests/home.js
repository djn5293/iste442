const router = (require('express')).Router();
const bodyParser = require('body-parser');

const calculator = require('./calculate');

/**
 * @description Accepts in a GET request but responds with a 400 error,
 *              stating that GET requests are not allowed on this API.
 */
router.get('/', (req, res) => {
    let body = '<!DOCTYPE html><html lang="en"><head><title>Calculator!</title></head><body>';
    body += '<form method="post" action="/">';
    body += '<input type="number" name="firstNum" placeholder="1"><select name="operator"><option>+</option><option>-</option><option>*</option><option>/</option></select><input type="number" name="secondNum" placeholder="2">';
    body += '<input type="submit" value="="></form>';
    body += '</body></html>'
    res.send(body);
});

router.post('/', bodyParser.urlencoded({ extended: false}), (req, res) => {
    if (req.body.firstNum && req.body.secondNum && req.body.operator) {
        let output = calculator.execute(req.body.firstNum, req.body.secondNum, req.body.operator);

        res.send('Your calculated value is: ' + output);
        return;
    }

    res.send('Please try again!');
});

module.exports = router;