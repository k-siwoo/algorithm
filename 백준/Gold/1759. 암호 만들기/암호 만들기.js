const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [L, C] = input[0].split(" ").map(Number);
const chars = input[1].split(" ").sort();

const vowels = new Set(["a", "e", "i", "o", "u"]);
const result = [];
const path = [];

const dfs = (start, vowelCount, consonantCount) => {
  if (path.length == L) {
    if (vowelCount >= 1 && consonantCount >= 2) {
      result.push(path.join(""));
    }
    return;
  }

  for (let i = start; i < C; i++) {
    const ch = chars[i];
    path.push(ch);

    if (vowels.has(ch)) {
      dfs(i + 1, vowelCount + 1, consonantCount);
    } else {
      dfs(i + 1, vowelCount, consonantCount + 1);
    }
    path.pop();
  }
};

dfs(0, 0, 0);
console.log(result.join("\n"));
