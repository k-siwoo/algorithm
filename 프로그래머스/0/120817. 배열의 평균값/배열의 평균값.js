function solution(numbers) {
    var answer = 0;
    let sum = numbers.reduce((x, cur) => x + cur, 0);
    
    return sum / numbers.length;
}