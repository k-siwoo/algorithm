const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const scores = input.map((score, index) => ({ score, index: index + 1 }));

// 점수를 내림차순 정렬하여 상위 5개 선택
scores.sort((a, b) => b.score - a.score);
const top5 = scores.slice(0, 5);

// 상위 5개 점수의 합 계산
const totalScore = top5.reduce((sum, item) => sum + item.score, 0);

// 상위 5개 점수의 인덱스를 오름차순으로 정렬
const indices = top5.map(item => item.index).sort((a, b) => a - b);

// 결과 출력
console.log(totalScore);
console.log(indices.join(" "));
