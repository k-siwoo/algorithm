#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int n) {
    int answer = 0;
    if((1 > n) || (n > 100)){
        return -1;
    }
    if(n % 2 == 1){
        for(int i = 1;i < n + 1;i++){
            if(i % 2 == 1){
                answer += i;
            }
        }
    }
    else if(n % 2 == 0){
        for(int i = 1;i < n + 1;i++){
            if(i % 2 ==0){
                answer += i * i;
            }
        }
    }
    return answer;
}