const fs = require('fs');
const file = 'day-three/input.txt';
const lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
const linesArray = lines.split("\n");
const symbolArray = ['*', '/', '=', '-', '+', '@', '#', '$', '%', '&', '!'];
const numberRegex = /\d+/g;

const getAdjacents = (row, index, length) => {
    const adj = [{row, col: index - 1}, {row, col: index + length}]
    //row - 1 && row + 1
    for (let i = -1; i <= length; i++) {
        adj.push({row: row - 1, col: index + i}, {row: row + 1, col: index + i})
    }
    return adj;
}

let sum = 0;
const method = () => {
    linesArray.forEach((line, row) => {
        const numbers = line.match(numberRegex);
        let baseIndex = 0;
        console.log(numbers);
        while (numbers.length) {
            const number = numbers.shift();
            const numberIndex = line.indexOf(number, baseIndex);
            baseIndex = numberIndex + number.length;
            //find values around number
            const adjacent = getAdjacents(row, numberIndex, number.length);
            if (!!adjacent.find(({row, col}) => {
                const symbol = linesArray[row]?.at(col);
                return symbolArray.includes(symbol)
            })) {
                sum += parseInt(number);
            }
        }
    });
    return sum;
}

console.log(method());