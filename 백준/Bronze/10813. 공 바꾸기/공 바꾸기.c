#include <stdio.h>

int main(void) {
    int arr[100];
    int n, m;
    int a, b, temp;
    scanf("%d %d", &n, &m);
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    for (int i = 0; i < m; i++) {
        scanf("%d %d", &a, &b);
        temp = arr[a - 1];
        arr[a - 1] = arr[b - 1];
        arr[b - 1] = temp;
    }
    for (int i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    return 0;
}
