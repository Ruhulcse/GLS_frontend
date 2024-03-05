import React from 'react'
import { data } from './index'
import ReportItem from './ReportItem'

function ReportList() {
  return (
    <div className=''>
        {data.map((item,i)=>(
            <ReportItem key={i} item={item}/>
        ))}
    </div>
  )
}

export default ReportList