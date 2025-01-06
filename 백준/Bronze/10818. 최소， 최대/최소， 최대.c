#include <stdio.h>

int main(void){
    int n, a;
    int max =  -1000001;
    int min = 1000001;
    int arr[1000001];
    scanf("%d", &n);
    for(int i = 0; i < n; i++){
        scanf("%d", &a);
        arr[i] = a;
    }
    for(int i = 0; i < n; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }
    printf("%d %d", min, max);
    return 0;
}