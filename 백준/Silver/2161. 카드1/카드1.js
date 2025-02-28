const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const queue = [];
const discarded = [];

// 1부터 N까지 큐에 삽입
for (let i = 1; i <= input; i++) {
  queue.push(i);
}

// 카드 제거 및 이동 과정
while (queue.length > 1) {
  discarded.push(queue.shift()); // 맨 위의 카드를 버림
  queue.push(queue.shift()); // 그다음 카드를 맨 뒤로 이동
}

// 출력 형식 수정 (버린 카드 + 마지막 카드 한 줄에 출력)
console.log([...discarded, queue[0]].join(" "));
