var express = require("express");
var path = require('path');

var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(path.join(__dirname, '../client/build/index.html'));
    res.sendFile('../../client/build/index.html')
});

router.get("determineBalanceAPi/:cardNumber", function (req, res, next) {
    const validCardLength = 16;
    const nonZeroLastDigits = [5, 2];
    const sumIndexStart = 0;
    const sumIndexEnd = 12;

    const cardNumber = req.params.cardNumber;

    if (cardNumber.length !== validCardLength) {
        return res.send('Incorrect card length')
    }

    const lastDigit = Number(cardNumber.slice(-1));
    var balance = 0;

    if (nonZeroLastDigits.includes(lastDigit)) {
        const digitList = cardNumber.split('').slice(sumIndexStart, sumIndexEnd);

        balance = digitList.map(Number).reduce((acc, current) => acc + current);
    }

    return res.send({ balance });
});

module.exports = router;