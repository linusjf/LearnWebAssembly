export function hstone(n: i32): i32 { // exported in WebAssembly
  let len: i32 = 0;
  while (true) {
    if (1 == n) break; // halt on 1
    if (0 == (n & 1)) n = n / 2; // if n is even
    else n = (3 * n) + 1; // if n is odd
    len++; // increment counter
  }
  return len;
}
