const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

let coveredArea = 0;

// 색종이 영역 표시
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      if (paper[x + dx][y + dy] === 0) { // 중복되지 않은 부분만 카운트
        paper[x + dx][y + dy] = 1;
        coveredArea++;
      }
    }
  }
}

// 결과 출력
console.log(coveredArea);
