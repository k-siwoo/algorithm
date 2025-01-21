#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void) {
	int n;
	scanf("%d", &n);
	int Q[2000000] = { 0, };
	char arr[10];
	int item;
	int front = -1;
	int rear = -1;
	for (int i = 0; i < n; i++) {
		scanf("%s", arr);
		if (!strcmp(arr, "push")) {
			scanf("%d", &item);
			Q[++rear] = item;
		}
		else if (!strcmp(arr, "pop")) {
			if (rear == front) {
				printf("-1\n");
			}
			else {
				printf("%d\n", Q[++front]);
			}
		}
		else if (!strcmp(arr, "size")) {
			printf("%d\n", rear - front);
		}
		else if (!strncmp(arr, "empty", 5)) {
			printf("%d\n", front == rear);
		}
		else if (!strncmp(arr, "front", 5)) {
			if (front == rear) {
				printf("-1\n");
			}
			else {
				printf("%d\n", Q[front + 1]);
			}
		}
		else if (!strcmp(arr, "back")) {
			if (front == rear) {
				printf("-1\n");
			}
			else {
				printf("%d\n", Q[rear]);
			}
		}
	}
	return 0;
}