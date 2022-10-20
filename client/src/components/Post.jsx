import React from 'react'

function Post({flags, countryName, link, region}) {
  return (
    <a href={link} target='_blank' className='grid grid-flow-dense'>
        <div className='bg-slate-100 inline'>
            <div className='hover:scale-105 transition-all max-w-md bg-yellow-100 justify-between rounded-sm mb-3'>
                <div className='p-2 left-1 mt-3'>
                    <h2>
                        {countryName}
                    </h2>
                    <span className='text-slate-800 text-[13px] bg-sky-300 p-1 rounded-md'>
                        Region: {region}
                    </span>
                </div>
                <img src={flags} alt='asd' width='250px' />
            </div>   
        </div>
    </a>
  )
}

export default Post