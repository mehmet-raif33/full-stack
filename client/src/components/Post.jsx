import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Post({ postedDate, username, userimage, imageArray, upNumber, downNumber, commentNumber , lenghtOfImageArray }) {
    return (
    <div className='w-[700px] phone6:w-[700px] phone5:w-[650px] phone4:w-[600px] phone3:w-[500px] phone2:w-[400px] phone1:w-[390px] bg-blue-200 mb-5 transition-all rounded-sm'>
        
        <div className='bg-blue-200 flex flex-row pl-3 py-1 justify-between'>
            <div className='flex'>
                <img className='w-8 rounded-full' src={userimage} alt='sad' />
                <span className='mt-[5px] ml-2 text-[15px]'>
                    {username}
                </span>
            </div>
            <div className='relative right-2 top-1'>
                <button>
                    <img src='https://img.icons8.com/material-outlined/24/000000/menu-2.png' alt='sadsa' />
                </button>
            </div>      
        </div>
        <div className='inline'>
            {
                lenghtOfImageArray === 1 ? 
                <img src={imageArray[0]} alt='asds' />
                : 
                <Swiper
                autoHeight={true}
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, Pagination]}
                >
                    {
                        imageArray.map((eleman, index) => (
                            <SwiperSlide key={index}>
                                <img src={eleman} alt='sad' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            }
        </div>
        <div className='flex flex-row justify-between px-2 pt-1 pb-1'>
                        <div className='flex flex-row'>
                        <button className='flex flex-row mx-2 hover:bg-slate-400 rounded-md'>
                            <img src='https://img.icons8.com/material-outlined/24/000000/up.png' alt='sda' />
                            <span className='text-md px-1'>
                            {upNumber}
                            </span>
                        </button>
                        <button className='flex flex-row mx-2'>
                            <img src='https://img.icons8.com/material-outlined/24/000000/down.png' alt='sda' />
                            <span className='text-md px-1'>
                            {downNumber}
                            </span>
                        </button>
                        <button className='flex flex-row mx-2'>
                            <img src='https://img.icons8.com/material-outlined/24/000000/comments.png' alt='sda' />
                            <span className='text-md px-1'>
                            {commentNumber}
                            </span>
                        </button>
                        <button className='flex flex-row mx-2' >
                            <img src='https://img.icons8.com/material-outlined/24/000000/death-insurance.png' alt='sda' />
                        </button>
                        </div>
                        <div>
                        <span className='text-[13px] relative bottom-[1px] italic'>
                            Posted to {postedDate}
                        </span>
                        </div>
        </div>
    </div>
  )
}

export default Post