var express = require("express");
var router = express.Router();

//Todo:
/**
 * Split into functions
 * Consider not using express for BE
 */
router.get("/:cardNumber", function (req, res, next) {
    const validCardLength = 16;
    const nonZeroLastDigits = [5, 2];
    const sumIndexStart = 0;
    const sumIndexEnd = 12;
    var balance = 0;

    const cardNumber = req.params.cardNumber;

    if (cardNumber.length !== validCardLength) {
        return res.send('Incorrect card length')
    }

    const lastDigit = Number(cardNumber.slice(-1));

    if (nonZeroLastDigits.includes(lastDigit)) {
        const digitList = cardNumber.split('').slice(sumIndexStart, sumIndexEnd);

        balance= digitList.reduce((acc, current) => Number(acc) + Number(current))
    }

    return res.send(balance.toString());
});

module.exports = router;