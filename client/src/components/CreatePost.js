import { useState } from 'react'

function CreatePost() {

  const [fileName, setFileName] = useState('None')

  return (
    <div className='bg-green-200 h-[1000px] pt-[60px]'>
        <h1 className='text-2xl text-center'>Create Your Own Posts!!!</h1>
        <input type='file' id='file-input' 
        onChange={(e)=>{
          setFileName(e.target.files[0].name);
        }} 
        />
        <label for='file-input'>
          Choose a Image
        </label>
        <span>
          <strong>Chosen Image: </strong>
          <span id='file-name'>{fileName}</span>
        </span>
    </div>
  )
}

export default CreatePost