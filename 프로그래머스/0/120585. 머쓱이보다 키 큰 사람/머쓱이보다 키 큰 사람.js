function solution(array, height) {
    array.sort((a, b) => b - a);
    const answer = array.filter((x)=> x > height).length;
    return answer;
}