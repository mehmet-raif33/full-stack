import React from 'react'
import { useState } from 'react';

function HomePage() {

    const [image,setimage] = useState(null);
  
    const onChangeFunction = async (e) => {
      const file = await e.target.files[0];
      const format = await base64(file)
      setimage(format);
      console.log(format)
      return format;
    }

    const base64 = (file) => {
      return new Promise(async (resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
          reject(error)
        }
      })
    }

    return (
      <div className='bg-yellow-300 flex justify-center'>
          <div className='bg-sky-300 p-5 my-10 rounded-md'>
            <input type='file' onChange={onChangeFunction} />
            <img src={image} alt='skjd' className='w-[300px] rounded-md mt-3' />
          </div>
      </div>
    )
}

export default HomePage