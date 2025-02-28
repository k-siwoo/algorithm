const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 사람 수
let maxPlayer = 0;
let maxScore = 0;

for (let i = 1; i <= N; i++) {
  const cards = input[i].split(" ").map(Number);
  let bestScore = 0;

  // 5장의 카드에서 3장을 선택하는 모든 조합
  for (let a = 0; a < 3; a++) {
    for (let b = a + 1; b < 4; b++) {
      for (let c = b + 1; c < 5; c++) {
        const sum = cards[a] + cards[b] + cards[c];
        const score = sum % 10;
        if (score > bestScore) {
          bestScore = score;
        }
      }
    }
  }

  // 최고 점수를 갱신할 경우 플레이어를 변경
  if (bestScore > maxScore || (bestScore === maxScore && i > maxPlayer)) {
    maxScore = bestScore;
    maxPlayer = i;
  }
}

console.log(maxPlayer);
