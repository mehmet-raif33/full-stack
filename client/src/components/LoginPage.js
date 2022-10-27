import { motion } from 'framer-motion';
import { useDispatch , useSelector } from 'react-redux';
import { signInSignUp } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errormessage = useSelector(state => state.userInfo.state.errorMessage)
    const waitCode = useSelector(state => state.userInfo.state.stateCodeOflogin)

    const onSubmitButton = async (e) => {
        e.preventDefault();
        let userInfo = {
            sendState: 'login',
            mail : e.target.email.value,
            password : e.target.password.value
        }
        await dispatch(signInSignUp(userInfo))
        
    }

    waitCode === 1 && navigate(`/homepage`);

  return (
    <motion.div className='flex justify-center items-center h-[643px] bg-green-400'>
        <motion.form onSubmit={onSubmitButton}
            className='flex flex-col bg-slate-200 w-[400px] h-100 p-10 rounded-sm mb-20'
            initial={{
                scale:0.8,
                opacity: 0.9
            }}
            animate={{
                scale: 1.1,
                opacity: 1,
            }}
            transition={{
                delay:0,
                duration: 0.2,
                ease:'easeIn'
            }}        
            >
                <h3 className='text-center my-0 p-0 mb-7 text-[25px]'>
                    Where were you?
                </h3>
                <input className='p-2 rounded-md outline-none mb-2' type='email' name='email' placeholder='mail' required />
                <input className='p-2 rounded-md outline-none mb-2' type='password' name='password' placeholder='password' required/>
                { waitCode === 0 ? <span className='text-red-800 ml-1 text-[13px]'>{errormessage}</span> : '' }
                <button type='submit' className='bg-yellow-300 mx-20 py-2 rounded-md transition-all hover:scale-110 mt-4'>
                    Login
                </button>
            </motion.form>
    </motion.div>
  )
}

export default LoginPage