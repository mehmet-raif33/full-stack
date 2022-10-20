import { useEffect , useState } from 'react'
import Post from './Post'
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';
import { add , search } from '../redux/slices/countrySlice';
 
function PostList() {

    const dispatch = useDispatch();
    const Arraydata = useSelector(state => state.countryData)
    const [countryList, setCountryList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((data) => {
            dispatch(add(data.data));
        })
    }, [])

    return (
        <div className='grid grid-col-2 gap-2 bg-gradient-to-tl to-sky-300 from-sky-300 px-10 py-5'>
            {
                Arraydata.map((ulke, index) => (
                    <Post key={index}  />
                ))
            }
        </div>
  )
}

export default PostList