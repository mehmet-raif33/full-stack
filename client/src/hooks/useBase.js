const base64 = (file) => {
  return new Promise(async (resolve, reject) => {
    const fileReader = new FileReader();
    await fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}

export { base64 }