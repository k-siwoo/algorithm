const fs = require('fs');
let X = Number(fs.readFileSync('/dev/stdin').toString().trim());

let n = 1;
while (X > (n * (n + 1)) / 2) {
  n++;
}

let index = X - ((n * (n - 1)) / 2);

if (n % 2 === 0) {
  console.log(`${index}/${n + 1 - index}`);
} else {
  console.log(`${n + 1 - index}/${index}`);
}
