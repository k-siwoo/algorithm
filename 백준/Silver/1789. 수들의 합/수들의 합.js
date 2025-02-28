const fs = require("fs");
let S = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

let sum = BigInt(0);
let count = BigInt(0);
let n = BigInt(1);

while (sum + n <= S) {
  sum += n;
  count++;
  n++;
}

console.log(count.toString());
