/**
* @class       : index
* @author      : Linus Fernandes (linusfernandes at gmail dot com)
* @created     : Saturday Jun 03, 2023 14:43:56 IST
* @description : index
*/
import { wasmBrowserInstantiate } from "./instantiateWasm.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const wasmModule = await wasmBrowserInstantiate("./build/release.wasm");

  // Get our exports object, with all of our exported Wasm Properties
  const exports = wasmModule.instance.exports;

  console.log(exports.callMeFromJavascript(24, 24)); // Logs 49

  // Since our constant is a global we use `.valueOf()`.
  // Though, in some cases this could simply be: exports.GET_THIS_CONSTANT_FROM_JAVASCRIPT
  console.log(exports.GET_THIS_CONSTANT_FROM_JAVASCRIPT.valueOf()); // Logs 2424

  // Trying to access a property we did NOT export
  console.log(exports.addIntegerWithConstant); // Logs undefined
  window.add = exports.callMeFromJavascript;
};
runWasm();
