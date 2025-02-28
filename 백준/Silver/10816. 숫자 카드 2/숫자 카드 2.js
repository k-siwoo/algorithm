const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const A = input[1].split(" ").map(Number);
const M = parseInt(input[2]);
const X = input[3].split(" ").map(Number);

const countMap = new Map();
A.forEach(num => {
  countMap.set(num, (countMap.get(num) || 0) + 1);
});
const result = X.map(x => countMap.get(x) || 0);
console.log(result.join(" "));
