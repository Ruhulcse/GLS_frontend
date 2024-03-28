import React from 'react'
import { useLocation } from 'react-router-dom';

function CardDetails() {
  
  const location = useLocation();
  const {title,image,info,type} = location.state
  console.log(location);
  return (
    <div className='container mx-auto'>
      <div className='text-3xl font-bold'>{title}</div>
      <div className='flex mx-auto my-12 justify-center w-1/2 h-4/6'>
       {type==='blog'? <img src={image}className='h-full w-full' alt="" />:
       <video width="100%" height="100%" controls > 
        
     </video>}
      </div>
      <div className="font-normal text-xl text-justify mb-24 mx-4 md:mx-0">
        {info}
      </div>
    </div>
  )
}

export default CardDetails