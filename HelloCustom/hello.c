/**
  * @author      : Linus Fernandes (linusfernandes at gmail dot com)
  * @file        : hello
  * @created     : Saturday May 27, 2023 20:38:26 IST
*/

#include <stdio.h>
#include <emscripten/emscripten.h>

int main() {
    printf("Hello World\n");
    return 0;
}

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE void myFunction(int argc, char ** argv) {
    printf("MyFunction Called\n");
}