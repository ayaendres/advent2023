const fs = require('fs');
const file = 'day-one/input.txt';
let lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
const digitStrings = [0, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const findAndAddDigits = () => {
    digitStrings.forEach((val, index) => lines = lines.replaceAll(val, `${val}${index}${val}`));
    const linesArray = lines.split('\n');
    let sum = 0;
    for (const line of linesArray) {

        const digits = line.replace(/\D/g, "");
        const num = digits[0] + digits[digits.length - 1];
        sum += parseInt(num);
    }
    return sum
}

console.log(findAndAddDigits());

