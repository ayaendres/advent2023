const fs = require('fs');
const file = 'day-one/input.txt';
const lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });

const linesArray = lines.split('\n');
let sum = 0;
for (const line of linesArray) {
    const digits = line.replace(/\D/g, "");
    const num = digits[0] + digits[digits.length - 1];
    sum += parseInt(num);
}
console.log(sum);