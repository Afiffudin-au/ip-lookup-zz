import React from 'react'
import Banner from '../Banner/Banner'
import LookupResult from '../LookupResult/LookupResult'
import Navbar from '../Navbar/Navbar'
import './Home.scss'
function Home() {
  return (
    <div className="home">
      <Navbar/>
      <Banner/>
      <LookupResult/>
    </div>
  )
}

export default Home
