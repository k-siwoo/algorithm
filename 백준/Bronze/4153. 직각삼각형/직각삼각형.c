#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
	long long a, b, c, max, other1, other2;
	while (1) {
		scanf("%lld %lld %lld", &a, &b, &c);
		if (!a && !b && !c) break;

		// 가장 큰 값을 max로 설정
		if (a > b && a > c) {
			max = a;
			other1 = b;
			other2 = c;
		} else if (b > a && b > c) {
			max = b;
			other1 = a;
			other2 = c;
		} else {
			max = c;
			other1 = a;
			other2 = b;
		}

		if ((other1 * other1) + (other2 * other2) == max * max) printf("right\n");
		else printf("wrong\n");
	}
	return 0;
}
