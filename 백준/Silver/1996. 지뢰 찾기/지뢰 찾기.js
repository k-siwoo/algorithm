const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 격자 크기
const grid = input.slice(1).map(row => row.split("").map(cell => (cell === "." ? 0 : Number(cell))));
const result = Array.from({ length: N }, () => Array(N).fill(0));

// 8방향 탐색을 위한 좌표 변화값
const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

// 지뢰의 개수 카운트
for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    if (grid[x][y] > 0) { 
      result[x][y] = "*"; // 지뢰 위치 표시
      continue;
    }

    let mineCount = 0;
    for (let d = 0; d < 8; d++) {
      let nx = x + dx[d];
      let ny = y + dy[d];

      if (nx >= 0 && nx < N && ny >= 0 && ny < N && grid[nx][ny] > 0) {
        mineCount += grid[nx][ny];
      }
    }

    result[x][y] = mineCount > 9 ? "M" : mineCount;
  }
}

// 결과 출력
console.log(result.map(row => row.join("")).join("\n"));
