import React from 'react'
import './Banner.scss'
import SearchBanner from './SearchBanner/SearchBanner'
function Banner() {
  return (
    <div className="banner jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1>Find IP Now</h1>
        <SearchBanner/>
      </div>
    </div>
  )
}

export default Banner
