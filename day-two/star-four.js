const fs = require('fs');
const file = 'day-two/input.txt';
const lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
const blueRegex = /\d+\d* blue/g;
const redRegex = /\d+\d* red/g;
const greenRegex = /\d+\d* green/g;

const getMax = (line, colorRegex) => {
    const matches = line.match(colorRegex);
    if (!matches) {
        return 0
    }
    let max = 0;
    matches.forEach((value) => parseInt(value) > max ? max = parseInt(value) : null);
    return max;
}
const gamePowerSum = () => {
    let gameTotal = 0;
    const linesArray = lines.split('\n');
    linesArray.forEach((line) => {
        const power = getMax(line, blueRegex) * getMax(line, redRegex) * getMax(line, greenRegex);
        gameTotal += power
    });

    return gameTotal;
}

console.log(gamePowerSum());