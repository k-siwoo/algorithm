const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);
let N = Number(input[2]);

A = A % B; 

for (let i = 0; i < N - 1; i++) {
  A = (A * 10) % B;
}

console.log(Math.floor((A * 10) / B));
