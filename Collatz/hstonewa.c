/**
* @author      : Linus Fernandes (linusfernandes at gmail dot com)
* @file        : hstonewa
* @created     : Friday Jun 02, 2023 22:05:23 IST
*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>
int EMSCRIPTEN_KEEPALIVE hstone(int n) {
  int len = 0;
  while (1) {
    if (1 == n) break; /* halt on 1 */
    if (0 == (n & 1)) n = n / 2; /* if n is even */
    else n = (3 * n) + 1; /* if n is odd */
    len++; /* increment counter */
  }
  return len;
}
