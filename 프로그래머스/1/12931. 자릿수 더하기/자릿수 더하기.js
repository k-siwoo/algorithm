function solution(n)
{
    let str = String(n).split("");
    let answer = str.reduce((a, c) => a + Number(c), 0)
    return answer;
}