/**
  * @author      : Linus Fernandes (linusfernandes at gmail dot com)
  * @file        : hstone
  * @created     : Friday Jun 02, 2023 21:18:39 IST
  */
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int hstone(int n) {
  int len = 0;
  while (1) {
    if (1 == n) break; /* halt on 1 */
    if (0 == (n & 1)) n = n / 2; /* if n is even */
    else n = (3 * n) + 1; /* if n is odd */
    len++; /* increment counter */
  }
  return len;
}
#define HowMany 8
int main() {
  /* seed random number generator */
  srand(time(NULL));
  int i;
  puts(" Num Steps to 1");
  for (i = 0; i < HowMany; i++) {
    int num = rand() % 100 + 1; /* + 1 to avoid zero */
    printf("%4i %7i\n", num, hstone(num));
  }
  return 0;
}
