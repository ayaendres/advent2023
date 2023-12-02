const fs = require('fs');
const file = 'day-two/input.txt';
const lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
const blueRegex = /\d\d blue/g;
const redRegex = /\d\d red/g;
const greenRegex = /\d\d green/g;

const checkPassing = (line, colorRegex, max) => {
    const matches = line.match(colorRegex);
    if (!matches) {
        return true
    }
    console.log(matches);
    return matches.every((value) => parseInt(value) <= max);

}
const possibleGames = () => {
    let gameTotal = 0;
    const linesArray = lines.split('\n');
    linesArray.forEach((line, index) => {
    const gameNumber = index + 1;
    if (checkPassing(line, blueRegex, 14) && checkPassing(line, redRegex, 12) && checkPassing(line, greenRegex, 13)) {
        gameTotal += gameNumber;
        console.log(gameNumber, gameTotal)
    }
    });

    return gameTotal;
}

console.log(possibleGames());