import React from 'react'
import { road } from '../../assets/index'
import ReportList from './../../components/report/ReportList'
import Services from './../../components/service/Services'
import Blogs from './../../components/blog/Blogs'

function BlogPage() {
  return (
    <div className='mt-24 mb-12'>
        {/* title */}
        <div className='w-full min-h-72 bg-gradient-to-r from-blue-950 to-blue-500'>
            <div className='flex flex-col justify-center my-auto min-h-72 items-center container mx-auto space-y-10 text-white'>
            <h1 className='md:text-8xl text-5xl  font-extrabold '>Blog</h1>
            <p className='font-semibold text-xl  text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo magnam expedita nostrum aliquam, veritatis earum odit blanditiis id quasi</p>
            </div>
        </div>
        {/* about */}
        <div className='grid mx-5 mt-16 lg:mx-auto lg:grid-cols-2 grid-cols-1 space-y-10 lg:space-y-0 lg:space-x-10 lg:container lg:min-h-[500px]'>
            <div className='h-[400px] relative lg:h-[100%]'>
                <img src={road} alt="" className='h-full absolute w-full object-cover' />
        
            </div>
           
             <ReportList/>
            

        </div>
       {/* service */}
       <Services/>
       {/* blogs */}
       <Blogs/>
    </div>
  )
}

export default BlogPage