const fs = require("fs");

const input =
  process.platform === "linux"
    ? fs.readFileSync(0, "utf8").trim().split("\n")
    : `4 5 1
1 2
1 3
1 4
2 4
3 4`
        .trim()
        .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

const visitedDFS = Array(N + 1).fill(false);
const dfsResult = [];

const dfs = (node) => {
  visitedDFS[node] = true;
  dfsResult.push(node);

  for (const next of graph[node]) {
    if (!visitedDFS[next]) dfs(next);
  }
};

dfs(V);

const visitedBFS = Array(N + 1).fill(false);
const bfsResult = [];
const queue = [V];
let front = 0;

visitedBFS[V] = true;

while (front < queue.length) {
  const node = queue[front++];
  bfsResult.push(node);

  for (const next of graph[node]) {
    if (!visitedBFS[next]) {
      visitedBFS[next] = true;
      queue.push(next);
    }
  }
}

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
