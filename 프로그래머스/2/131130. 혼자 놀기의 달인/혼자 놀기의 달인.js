function solution(cards) {
  let visited = new Array(cards.length).fill(false);
  let groups = [];
  for(let i = 0; i < cards.length; i++) {
    if(!visited[i]) {
      let size = 0;
      idx = i + 1;

      while(!visited[idx - 1]) {
        visited[idx - 1] = true;
        idx = cards[idx - 1];
        size++;
      }

      groups.push(size);
    }
  }

  groups.sort((a, b) => b - a);
  return groups.length >= 2 ? groups[0] * groups[1] : 0;
}
