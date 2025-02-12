import React from 'react'

const data = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
]

function PrivacyModel({handleModel}) {
  return (
   <div className='inset-0 fixed bg-black bg-opacity-50 bg-black-900 flex items-center justify-center'>
     <div className="h-96 w-96  absolute right-0 top-0 m-auto bottom-0 left-0 rounded-lg ">

<div className="h-full w-full bg-[#A8C4F0] text-white p-8 text-justify rounded-md">
  <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
  <ul className='text-sm text-black-600'>
    {data.map((item, idx) => (
        <li key={idx} className="list-disc">{item}</li>
    ))}
  </ul>
  <div className="flex mt-4 justify-center space-x-5">
  <button className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded" onClick={() =>handleModel(false)}>Cancel</button>
  <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>handleModel(true)}>I agree</button>
</div>
</div>



</div>
   </div>
  )
}

export default PrivacyModel