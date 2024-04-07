import React from 'react'
import Banner from '../Solutions/Banner'
import staticstics from'../../assets/solutions/Staticstics.jpg'
import Services from '@/components/Services/Services'

const ProductFinder = () => {
  return (
    <div>
      <Banner bgImage={staticstics}
      heading={"Find your product"}
      heroSpan={" GLS products finder"}
      paragraph={"Find all the information you need to start loading for GLS certified products, including product details, rebates, and retailers near you. Products that earn the ENERGY STAR label meet strict energy-efficiency specifications set by the U.S. EPA helping you save energy and money while protecting the environment"}
      btnId={'package'}
      ></Banner>
      <div className='flex flex-col justify-center items-center text-center mt-10' >
          <h1   data-aos="fade-right" className='text-3xl font-bold text-indigo-900 text-center'>Find your product!!!</h1>
          <p data-aos="fade-left">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
      <div id='package' className='bg-black bg-opacity-30 items-center justify-center'>
        <Services></Services>
      </div>
    </div>
  )
}

export default ProductFinder
