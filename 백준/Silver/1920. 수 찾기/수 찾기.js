  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const N = parseInt(input[0]);
  const A = input[1].split(" ").map(Number).sort((a, b) => a - b);
  const M = parseInt(input[2]);
  const X = input[3].split(" ").map(Number);
  
  X.forEach(x => {
    let start = 0;
    let end = N - 1;
    let find = false;

    while(start <= end){
      const mid = Math.floor((start + end) / 2);
      if(A[mid] < x){
        start = mid + 1;
      } else if( A[mid] > x){
        end = mid - 1;
      } else {
        find = true;
        break;
      }
    }
    console.log(find ? 1 : 0);
  })