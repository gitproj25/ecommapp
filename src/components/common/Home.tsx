import React from 'react'
import Hero from './Hero'
import Brand from '../ui/Brand'
import NewArrivals from '../ui/NewArrival'
import TopSellings from '../ui/TopSellings'
import BrowseBy from '../ui/BrowseBy'
import HappyCustomerSections from '../ui/HappyCustomer'
import NewsLetter from '../ui/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Brand/>
      <NewArrivals/>
      <TopSellings/>
      <BrowseBy/>

    
   <HappyCustomerSections/>
      {/* <NewsLetter/> */}
     
     
      
    </div>
  )
}

export default Home
