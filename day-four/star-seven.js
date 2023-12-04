const fs = require('fs');
const file = 'day-four/input.txt';
const lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
const linesArray = lines.split("\n");
const numberRegex = /\d+/g;

let total = 0;
linesArray.forEach((line) => {
    const numsArray = line.split(":")[1].match(numberRegex);
    const matches = numsArray.length - [...new Set(numsArray)].length;
    if (matches) {
        total += 2 ** (matches - 1);
    }
});

console.log(total);