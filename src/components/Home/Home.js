import React from 'react'
import Banner from '../Banner/Banner'
import LookupResult from '../LookupResult/LookupResult'
import LookupResultMap from '../LookupResultMap/LookupResultMap'
import Navbar from '../Navbar/Navbar'
import './Home.scss'
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Banner/>
      <LookupResult/>
      <LookupResultMap/>
    </div>
  )
}

export default Home
