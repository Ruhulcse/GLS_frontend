import React from 'react';
import { FiCheckSquare } from "react-icons/fi";
import carrier from '../../assets/home/carrier details.jpg';

const Carrier = () => {
  return (
    <div className='sm:py-20 py-10'>
    <div className='sm:flex sm:flex-row-reverse sm:space-x-20 sm:space-y-0 space-y-4'>
    <div className='sm:basis-1/3'>
        <img src={carrier} alt="carrier" className='h-auto w-auto object-cover' />
        </div>
        <div className='sm:basis-1/2 flex flex-col space-y-4 self-center sm:px-0 px-4'>
            <h1 className='sm:text-4xl text-2xl text-[#9101FF] font-bold'>
                GLS Mobile App Can Easier <br /> Your Business 
            </h1>
            <div className='flex space-x-4 text-[#0A0D10]'>
           <FiCheckSquare className='size-5 shrink-0'/>
            <div className='inset-y-0 space-y-2'>
            <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
            </div>
            </div>
            <div className='flex space-x-4 text-[#0A0D10]'>
           <FiCheckSquare className='size-5 shrink-0'/>
            <div className='inset-y-0 space-y-2'>
            <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
            </div>
            </div>
            <div className='flex space-x-4 text-[#0A0D10]'>
           <FiCheckSquare className='size-5 shrink-0'/>
            <div className='inset-y-0 space-y-2'>
            <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
            </div>
            </div>
            <div className='flex space-x-4 text-[#0A0D10]'>
           <FiCheckSquare className='size-5 shrink-0'/>
            <div className='inset-y-0 space-y-2'>
            <p className='text-xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p className='text-xs tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas in consectetur porro similique veritatis! Quae tenetur expedita quis iusto?</p>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Carrier