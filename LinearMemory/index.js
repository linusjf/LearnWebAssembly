/**
* @class       : index
* @author      : Linus Fernandes (linusfernandes at gmail dot com)
* @created     : Saturday Jun 03, 2023 16:21:01 IST
* @description : index
*/
import {wasmBrowserInstantiate} from "./instantiateWasm.js"

const runWasm = async () => {
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate("./build/release.wasm");

  // Get our exports object, with all of our exported Wasm Properties
  const exports = wasmModule.instance.exports;

  // Get our memory object from the exports
  const memory = exports.memory;

  // Create a Uint8Array to give us access to Wasm Memory
  const wasmByteMemoryArray = new Uint8Array(memory.buffer);

  // Let's read index zero from JS, to make sure Wasm wrote to
  // wasm memory, and JS can read the "passed" value from Wasm
  console.log(wasmByteMemoryArray[0]); // Should Log "24".

  // Next let's write to index one, to make sure we can
  // write wasm memory, and Wasm can read the "passed" value from JS
  wasmByteMemoryArray[1] = 15;
  console.log(exports.readWasmMemoryAndReturnIndexOne()); // Should Log "15"
};
runWasm();
