const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(line => line.split(' ').map(Number));

let result = [];

for (let i = 1; i <= input[0][0]; i++) {
  let [N, M] = input[i];
  let count = 0;

  for (let j = N; j <= M; j++) {
    count += j.toString().split('0').length - 1; // 0의 개수를 센다
  }

  result.push(count);
}

result.forEach(x => {
  console.log(x);
});
