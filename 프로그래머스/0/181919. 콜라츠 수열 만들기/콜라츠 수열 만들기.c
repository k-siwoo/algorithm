#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int* solution(int n) {
    // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
    int* answer = (int*)malloc(1000);
    int x = n;
    int j = 0;
    answer[j++] = x;
    while(x != 1){
        if(x % 2 == 0){
            x /= 2;
        }
        else{
            x = 3 * x + 1;
        }
        answer[j++] = x;
    }
    return answer;
}