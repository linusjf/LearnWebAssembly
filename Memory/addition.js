export const wasmBrowserInstantiate = async (wasmModuleUrl, importObject) => {
let response = undefined;
if (!importObject) {
importObject = {
env: {
abort: () => console.log("Abort!")
}
};
}
const instantiateModule = async() => {
const response = await fetch(wasmModuleUrl);
const buffer = await response.arrayBuffer();
const obj = await WebAssembly.instantiate (buffer, importObject);
return obj;
};
response = await instantiateModule();
return response;
};

const runWasmAdd = async () => {
// Instantiate WASM module
const wasmModule = await wasmBrowserInstantiate("./addition.wasm");
// Call the exported add function from wasm and save the result
const addResult = wasmModule.instance.exports.add(42, 42);
// Set the result
document.body.textContent = `The result of the addition: ${addResult}`;
};
runWasmAdd();
