const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [U, N] = input[0].split(' ').map(Number);
const bids = [];
const bidCount = new Map();

// 모든 입찰 정보를 저장
for (let i = 1; i <= N; i++) {
  const [name, price] = input[i].split(' ');
  const bid = { name, price: Number(price) };
  bids.push(bid);
  
  // 가격별 빈도수 계산
  bidCount.set(bid.price, (bidCount.get(bid.price) || 0) + 1);
}

// 가장 적게 등장한 가격 찾기
let minFrequency = Infinity;
for (let count of bidCount.values()) {
  if (count < minFrequency) {
    minFrequency = count;
  }
}

// 가장 적게 등장한 가격 중 가장 낮은 가격 찾기
let minUniquePrice = Infinity;
for (let [price, count] of bidCount.entries()) {
  if (count === minFrequency && price < minUniquePrice) {
    minUniquePrice = price;
  }
}

// 해당 가격을 최초로 제시한 입찰자 찾기
for (let bid of bids) {
  if (bid.price === minUniquePrice) {
    console.log(bid.name, bid.price);
    break;
  }
}
