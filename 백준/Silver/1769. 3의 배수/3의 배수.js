const fs = require("fs");
let X = fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;

while (X.length > 1) {
  X = X.split("").reduce((sum, digit) => sum + Number(digit), 0).toString();
  count++;
}

console.log(count);
console.log(Number(X) % 3 === 0 ? "YES" : "NO");