import React from 'react'
import { useSelector , useState } from 'react';

function HomePage() {
  
    const onChangeFunction = async (e) => {
      const file = e.target.files[0];
      const format = await base64(file)
      console.log(format)
      return format;
    }

    const base64 = async (file) => {
      return new Promise(async (resolve, reject) => {
        const FileReader = await new FileReader();
        await FileReader.readAsDataUrl(file);
        FileReader.onload = () => {
          resolve(FileReader.result);
        }
        FileReader.onerror = (error) => {
          reject(error)
        }
      })
    }

    return (
      <div className='bg-yellow-300 flex justify-center'>
          <div className='bg-sky-300 p-5 my-10 rounded-md'>
            <input type='file' onChange={onChangeFunction} />
          </div>
      </div>
    )
}

export default HomePage