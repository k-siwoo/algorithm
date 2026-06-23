function solution(s) {
    let min = Infinity;
    let max = -Infinity;
    s.split(" ").forEach((x, i) => {
        min = Math.min(Number(x), min);
        max = Math.max(Number(x), max);
    })
    var answer = `${min} ${max}`;
    return answer;
}