import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import '../../cssHelper/helper.css'
import './Section.css'
import Hero from '../Hero/Hero'
import Related from '../Related/Related'
import SerachResults from '../SearchResult/SearchResults'

function Section() {
  const [isSearch, setisSearch] = useState(false)
  return (
    <div className='Section flex'>
      {/* <Sidebar/>
      {isSearch ? <SerachResults/> : <Hero/>}
      <Related/> */}
    </div>
  )
}

export default Section
