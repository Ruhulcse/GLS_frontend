import React from 'react'
import Brokers from '../../components/Brokers/Brokers'
import Carrier from '../../components/Carrier/Carrier'
import ClientReview from '../../components/ClientReview/ClientReview'
import Hero from '../../components/Hero/Hero'
import MobileApp from '../../components/MobileApp/MobileApp'
import Pricing from '../../components/Pricing/Pricing'
import Services from '../../components/Services/Services'
import Shippers from '../../components/Shippers/Shippers'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <MobileApp></MobileApp>
      <Carrier></Carrier>
      <Brokers></Brokers>
      <Shippers></Shippers>
      <Pricing></Pricing>
      <ClientReview></ClientReview>
    </div>
  )
}

export default Home