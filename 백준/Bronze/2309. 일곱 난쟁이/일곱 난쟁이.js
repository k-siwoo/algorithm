const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

input.sort((a,b) => a - b);

let isFound = false;

for(let i = 0; i < 9; i++){
  for(let j = 0; j < 9; j++){
    let sum = input.reduce((sum, height) => sum + height, 0);
    let ex = input[i] + input[j];

    if(sum - ex === 100){
      for(let k = 0; k < 9; k++){
        if(k !== i && k !== j){
          console.log(input[k]);
        }
      }
      isFound = true;
      break;
    }
  }
  if(isFound) break;
}
