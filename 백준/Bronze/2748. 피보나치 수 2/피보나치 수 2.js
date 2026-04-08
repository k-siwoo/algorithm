const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();
const n = Number(input);
const dp = new Array(n + 1).fill(0);
dp[0] = 0n;
dp[1] = 1n;

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[n].toString());
