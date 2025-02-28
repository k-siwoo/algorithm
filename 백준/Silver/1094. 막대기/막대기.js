const fs = require('fs');
let X = Number(fs.readFileSync('/dev/stdin').toString().trim());

let count = 0;

while (X > 0) {
  if (X % 2 === 1) {
    count++;
  }
  X = Math.floor(X / 2);
}

console.log(count);
