// include the following line if planning to use prompt function with Node.js:
const prompt = require('prompt-sync')();
const length = 10;
const width = 5;
const height = 8;
const volume = length * width * height;
console.log(`Volume : ${volume}`)
const surfaceArea = 2 * (length * width + width * height + height * length);
console.log(`Surface Area : ${surfaceArea}`);
const summary = `The box has dimensions of ${length} x ${width} x ${height}, a volume of ${volume}, and a surface area of ${surfaceArea}.`;
console.log(summary);