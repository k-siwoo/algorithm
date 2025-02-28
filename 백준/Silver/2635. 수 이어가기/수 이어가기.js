const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());

let maxLength = 0;
let bestSequence = [];

for (let second = 1; second <= N; second++) {
  let sequence = [N, second];
  let a = N;
  let b = second;

  while (a - b >= 0) {
    let next = a - b;
    sequence.push(next);
    a = b;
    b = next;
  }

  if (sequence.length > maxLength) {
    maxLength = sequence.length;
    bestSequence = sequence;
  }
}

// 결과 출력
console.log(maxLength);
console.log(bestSequence.join(" "));
