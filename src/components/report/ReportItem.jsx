import React from 'react'

function ReportItem({item}) {
    console.log(item);
  return (
  
     <div className='sm:flex bg-gray-300 my-6 lg:my-2 min-w-full'>
        <div className=' md:w-5/12 w-full'>
            <img src={item.image} className='h-full w-full object-cover'  alt="" />
        </div>
        <div className='md:flex md:w-2/3 w-5/6 md:h-full  my-auto md:p-10'>
            <p className='md:text-xl md:font-bold text-xl font-bold text-center'>{item.title}</p>
        </div>
    </div>
  
  )
}

export default ReportItem