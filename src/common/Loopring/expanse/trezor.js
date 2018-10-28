export async function getAddress(path) {
  path = path || "m/44'/60'/0'/0/0";
  return new Promise((resolve) => {
    window.TrezorConnect.expanseGetAddress(path, function (result) {
      if (result.success) {
        resolve(result.address)
      } else {
        throw new Error(result.error);
      }
    });
  })
}

export async function trezorSign({path, hash}) {
  path = path || "m/44'/60'/0'/0/0";
  return new Promise((resolve) => {
    window.TrezorConnect.expanseSignMessage(path, hash, function (result) {
      if (result.success) {
        resolve(result.signature)
      } else {
       throw new Error(result.error.message)
      }
    });
  })
}



