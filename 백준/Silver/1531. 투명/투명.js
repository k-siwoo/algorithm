const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = Array.from({ length: 100 }, () => Array(100).fill(0));
let count = 0;

// 주어진 직사각형을 칠하기
for (let i = 1; i <= N; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let x = x1 - 1; x < x2; x++) {
    for (let y = y1 - 1; y < y2; y++) {
      board[x][y]++;
    }
  }
}

// M을 초과하는 영역 개수 세기
for (let x = 0; x < 100; x++) {
  for (let y = 0; y < 100; y++) {
    if (board[x][y] > M) {
      count++;
    }
  }
}

console.log(count);
