import React from 'react';
import { FiCheckSquare } from "react-icons/fi";
import android from '../../assets/home/android.png';
import App from '../../assets/home/app.jpg';
import apple from '../../assets/home/apple.png';
const MobileData = [
    {
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
    {
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
    {
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
    {
        title:"Lorem ipsum dolor, sit amet consectetur adipisicing",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?",
    },
]
const MobileApp = () => {
  return (
    <div className='sm:py-20 py-10 bg-[#0A0D10]'>
        <div className='sm:flex sm:space-x-20 sm:space-y-0 space-y-4'>
            <div className='sm:basis-1/3'>
            <img src={App} alt="android" className='h-auto w-auto object-cover' />
            </div>
            <div className='sm:basis-1/2 flex flex-col space-y-4 self-center sm:px-0 px-4'>
                <h1 className='sm:text-4xl text-2xl text-[#9101FF] font-bold'>
                    GLS Mobile App Can Easier <br /> Your Business 
                </h1>
                {/* <div className='flex space-x-4'>
               <FiCheckSquare className='size-5 shrink-0 text-[#EFE8FF]'/>
                <div className='inset-y-0 text-[#EFE8FF] space-y-2'>
                <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
                </div>
                </div> */}
                {/* <div className='flex space-x-4 text-[#EFE8FF]'>
               <FiCheckSquare className='size-5 shrink-0'/>
                <div className='inset-y-0 space-y-2'>
                <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
                </div>
                </div> */}
                {/* <div className='flex space-x-4 text-[#EFE8FF]'>
               <FiCheckSquare className='size-5 shrink-0'/>
                <div className='inset-y-0 space-y-2'>
                <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
                </div>
                </div>
                <div className='flex space-x-4 text-[#EFE8FF]'>
               <FiCheckSquare className='size-5 shrink-0'/>
                <div className='inset-y-0 space-y-2'>
                <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
                </div>
                </div> */}
                {MobileData.map((item)=>(
                   <div className='flex space-x-4 text-[#EFE8FF]'>
                   <FiCheckSquare className='size-5 shrink-0'/>
                    <div className='inset-y-0 space-y-2'>
                    <p className='text-xl font-semibold'>{item.title}</p>
                    <p className='text-xs tracking-wider leading-relaxed'>{item.description}</p>
                    </div>
                    </div>
                ))}
                {/* <div className='flex space-x-2 pt-8'>
                    <img src={apple} alt="apple" className='h-1/4 w-1/4 cursor-pointer' />
                    <img src={android} alt="android" className='h-1/4 w-1/4 cursor-pointer'/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default MobileApp