import React from 'react'
import { Link } from 'react-router-dom'

function ServiceItem({item}) {
  return (
   <Link to={`/blogs/${item.title}`} className='w-full bg-red-600'>
    <div className='w-full bg-yellow-300 h-96 relative'>
      <img src={item.image} className='w-full h-full object-cover' alt="" />
      
      <div className='h-24  w-full bg-black absolute bottom-0 opacity-40 '>
        
      </div>
      <div className='h-24 w-full  absolute bottom-0'>
      <p className='flex justify-center text-white font-bold text-3xl items-center h-24 z-50'>{item.title}</p>
      </div>
    </div>
   </Link>
  )
}

export default ServiceItem