function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (i, sum) => {
        if(i == numbers.length){
            if(sum == target) answer++;
            return;
        }
        
        dfs(i + 1, sum + numbers[i]);
        dfs(i + 1, sum - numbers[i]);
    }
    dfs(0, 0);
    console.log(answer);
    return answer;
}