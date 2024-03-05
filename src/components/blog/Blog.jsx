import React from 'react'


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
    <div>
        <div className='h-96 w-full'>
            <img src={item.image} className='h-full w-full object-fill' alt="" />
        </div>
        <div className='mx-6'>
            <p className='text-xl font-medium py-8'>{splitText(item.info,150)}</p>
            <p  className='uppercase text-xl font-bold text-blue-700 cursor-pointer mb-12 mt-[-6px]'>read more</p>
        </div>
    </div>
  )
}

export default Blog