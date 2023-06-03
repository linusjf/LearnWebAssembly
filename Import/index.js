/**
* @class       : index
* @author      : Linus Fernandes (linusfernandes at gmail dot com)
* @created     : Saturday Jun 03, 2023 13:10:32 IST
* @description : index
*/
import { wasmBrowserInstantiate } from "./instantiateWasm.js";
import { domConsoleLog } from "./domConsole.js";
const runWasm = async () => {
  // Instantiate our wasm module
  // And pass in a wasm module
  const wasmModule = await wasmBrowserInstantiate("./build/release.wasm", {
    index: {
      consoleLog: value => domConsoleLog("Called from wasm: " + value)
    }
  });
};
runWasm();
