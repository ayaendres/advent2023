const fs = require('fs');
const file = 'day-three/input.txt';
const lines = fs.readFileSync(file, { encoding: 'utf8', flag: 'r' });
const linesArray = lines.split("\n");
const numberRegex = /\d+/g;


let sum = 0;
const method = () => {
    linesArray.forEach((line, row) => {
        let baseIndex = 0;
        while (line.indexOf('*', baseIndex) > 0) {
            const index = line.indexOf('*', baseIndex);
            baseIndex = index + 1;
            //find values around number
            const localLines = [linesArray[row - 1]?.substring(index - 3, index + 4) || "", line.substring(index - 3, index + 4), linesArray[row + 1]?.substring(index - 3, index + 4) || ""];
            const adjs = [];
            localLines.forEach((localLine) => {
                const numbers = localLine.match(numberRegex);
                let localBase = 0;
                numbers?.forEach((number) => {
                    const index = localLine.indexOf(number, localBase);
                    localBase = index + number.length;
                    const len = number.length - 1;
                    if ((index >= 2 && index <= 4) || (index + len >= 2 && index + len <= 4)) {
                        adjs.push(number);
                    }
                });
            });
            if (adjs.length === 2) {
                sum += (parseInt(adjs[0]) * parseInt(adjs[1]));
            }
        }
    });
    return sum;
}

console.log(method());