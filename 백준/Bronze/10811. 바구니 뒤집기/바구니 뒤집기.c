#include <stdio.h>

int main(void) {
    int arr[100] = { 0, };
    int arr2[100];
    int n, m, a, b, cnt;
    scanf("%d %d", &n, &m);
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    for (int i = 0; i < n; i++) {
        arr2[i] = i + 1;
    }
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            arr2[j] = arr[j];
        }
        scanf("%d %d", &a, &b);
        cnt = b;
        for (int j = a; j <= b; j++) {
            arr[j - 1] = arr2[(cnt--) - 1];
        }
    }
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}