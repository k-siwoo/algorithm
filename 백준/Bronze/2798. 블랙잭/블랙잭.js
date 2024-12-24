const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

cards.sort((a, b) => a - b);
let max = 0;

for(i = 0; i < N; i++){
  for(j = i + 1; j < N; j++){
    for (let k = j + 1; k < N; k++) {
      let ex = cards[i] + cards[j] + cards[k];
      
      if(ex > max && ex <= M){
        max = ex;
      }
      if(max == M){
        break;
      }
    }
    if(max == M){
      break;
    }
  }
  if(max == M){
    break;
  }
}

console.log(max);