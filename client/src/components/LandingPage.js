import { motion } from 'framer-motion'
import { useContext , useState } from 'react'
import { globalContext } from '../Context/globalContext'

function LandingPage() {

  const { name , background , setBackground , changeTheme } = useContext(globalContext);
  const [show, setShow] = useState(null);

  return (
    <div>
        <motion.div className='bg-green-700'>
            <motion.div className={ background === 'black' ? changeTheme('black') : changeTheme('white')}>
              { background === 'black' ? <h1>BLACK</h1> : <h1>WHITE</h1> }
                <button className='bg-sky-700 p-2 hover:scale-105 transition-all rounded-md text-white' onClick={()=>{
                  if(background === 'white'){
                    setBackground('black')
                  } else {
                    setBackground('white')
                  }
                  
                }}>Change To Text!!</button>
                <h2>
                    Welcome to the criticism community. { name }
                </h2>
                <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). 
                </p>
            </motion.div>
            <motion.img src=''></motion.img>
            <div className='bg-yellow-400 p-2 my-5 mx-2 rounded-md transition-all'>
              <button onClick={()=>{ setShow(!show) }}>
                SHOW
              </button>
              {
                show ? 
                <h2 className='transition-all p-2'>
                  Selam. Ben Kamuran. Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.
                  Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.
                  Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.
                  Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.Selam. Ben Kamuran.
                </h2>
                :
                <></>
              }
            </div>
        </motion.div>
    </div>
  )
}

export default LandingPage