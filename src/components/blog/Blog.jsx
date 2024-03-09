import React from 'react'

import { Link } from 'react-router-dom'
function Blog({item}) {
  
    const splitText = (text,size) =>{
       if(text.length > size) {
        return text.slice(0,size) + "..."
       } 
       else{
        return text
       }
    }
  return (
    <div className=' '>
        <div className='h-96 w-full'>
            <img src={item.image} className='h-full w-full object-fill' alt="" />
        </div>
        <div className='mx-6'>
            <p  className='text-xl font-medium py-8'>{splitText(item.info,150)}</p>
            <Link to={`/blog/${item.id}`} 
            state={item} className='uppercase text-xl font-bold text-blue-700 cursor-pointer bg-gray-200 p-2 hover:text-white hover:bg-slate-800 '>read more</Link>
        </div>
    </div>
  )
}

export default Blog