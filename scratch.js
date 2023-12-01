const fs = require('fs');

const file = '/path/to/file';

const lines = fs.readFileSync(file).split('\n');

for (const line of lines) {
    // do something with the line
}
console.log("hello world");