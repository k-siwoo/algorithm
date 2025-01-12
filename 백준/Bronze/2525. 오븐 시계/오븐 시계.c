#include <stdio.h>

int main(void){
    int h, m;
    scanf("%d %d", &h, &m);
    int t;
    scanf("%d", &t);
    m += t;
    if(m >= 60){
        h += m / 60;
        m = m % 60;
    }
    if(h >= 24)
        h %= 24;
    printf("%d %d", h, m);
    return 0;
}