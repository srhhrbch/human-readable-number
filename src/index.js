module.exports = function toReadable(number) {
    const numberArray = number.toString().split('');
    const numberLength = number.toString().length;
    const numbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred'
    };

    if (numberLength === 1) {
        return numbers[number];
    }

    if (numberLength === 2) {
        if (numbers[number]) {
            return numbers[number];
        } else {
            return numbers[numberArray[0] + 0] + ' ' + numbers[numberArray[1]];
        }
    }

    if (numberLength === 3) {
        if (numbers[number]) {
            return 'one ' + numbers[number];
        } else if (numberArray[1] == 0 && numberArray[2] == 0) {
            return numbers[numberArray[0]] + ' hundred';
        } else if (numberArray[1] == 0) {
            return numbers[numberArray[0]] + ' hundred ' + numbers[numberArray[2]];
        } else {
            return numbers[numberArray[0]] + ' hundred ' + (numbers[numberArray[1] + numberArray[2]] || numbers[numberArray[1] + 0] + ' ' + numbers[numberArray[2]]);
        }
    }
};