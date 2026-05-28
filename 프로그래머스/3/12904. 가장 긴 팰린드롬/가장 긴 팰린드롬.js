function solution(s)
{
    let answer = 1;
    const sl = s.length;

    for(let i = 0; i < sl; i++) {
        for(let j = sl - 1; j >= i; j--) {
            const length = j - i + 1;

            if(length <= answer) break;

            let left = i;
            let right = j;
            let isPalindrome = true;

            while(left < right) {
                if(s[left] !== s[right]) {
                    isPalindrome = false;
                    break;
                }

                left++;
                right--;
            }

            if(isPalindrome) {
                answer = length;
                break;
            }
        }
    }

    return answer;
}