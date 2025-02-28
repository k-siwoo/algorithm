const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = 0;

let money = Number(input[0].split(" ")[1]);
let parseInput = input.slice(1).map(Number).reverse();

parseInput = parseInput.filter(x => x <= money);

parseInput.forEach(x => {
  num += Math.floor(money / x);
  money = money % x;
})

console.log(num);