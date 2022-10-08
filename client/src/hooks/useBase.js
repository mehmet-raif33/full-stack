const base64 = (file, setimage) => {
    return new Promise(async (resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
        setimage(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
}

export { base64 };