#include <stdio.h>

int main(void){
    int arr[9];
    int a;
    int max = 0;
    int cnt;
    for(int i = 0; i < 9; i++){
        scanf("%d", &a);
        arr[i] = a;
    }
    for(int i = 0; i < 9; i++){
        if(arr[i] > max){
            max = arr[i];
            cnt = i + 1;
        }
    }
    printf("%d\n%d", max, cnt);
    return 0;
}