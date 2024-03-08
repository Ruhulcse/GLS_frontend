import React from 'react'
import ServiceItem from './ServiceItem'
import {data} from './index'

function Services() {
  return (
   <div className='mx-8 mt-24'>
     <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {data.map((item,i)=>(
            <ServiceItem key={i} item={item}/>
        ))}
    </div>
   </div>
  )
}

export default Services