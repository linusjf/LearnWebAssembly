/**
* @class       : instantiateWasm
* @author      : Linus Fernandes (linusfernandes at gmail dot com)
* @created     : Saturday Jun 03, 2023 13:20:15 IST
* @description : instantiateWasm
*/

export const wasmBrowserInstantiate = async (wasmModuleUrl, importObject) => {
  let response = undefined;

  if (!importObject) {
    importObject = {
      env: {
        abort: () => console.log("Abort!")
      }
    };
  }

  if (WebAssembly.instantiateStreaming) {
    response = await WebAssembly.instantiateStreaming(
      fetch(wasmModuleUrl),
      importObject
    );
  } else {
    const fetchAndInstantiateTask = async () => {
      const wasmArrayBuffer = await fetch(wasmModuleUrl).then(response =>
        response.arrayBuffer()
      );
      return WebAssembly.instantiate(wasmArrayBuffer, importObject);
    };
    response = await fetchAndInstantiateTask();
  }

  return response;
};
