const fs = require('fs');
const file = 'day-four/input.txt';
const lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
const linesArray = lines.split("\n").reverse();
const numberRegex = /\d+/g;

let foundVals = [];
let total = 0;
linesArray.forEach((line) => {
    const index = parseInt(line.split(':')[0].match(numberRegex));
    const numsArray = line.split(":")[1].match(numberRegex);
    const matches = numsArray.length - [...new Set(numsArray)].length;
    let lineTotal = 1;
    for (let i = 1; i <= matches; i++) {
        lineTotal += foundVals[index + i]
    }
    foundVals[index] = lineTotal;
    total += lineTotal;
});

console.log(total);