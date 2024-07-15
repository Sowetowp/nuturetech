import React from 'react'
import '../Styles/SearchBar.css'
import searchImage from '../assets/Vector 2.svg'
import locationIcon from '../assets/Group.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const [searchLocation, setSearchLocation] = useState('')
    const [searchJob, setSearchJob] = useState('')

  return (
    <div>
         <div className='searchBar'>
            <div className='search-white'>
              <div className='Jobtitle-Search'>
                <img  className='searchIcon' src= {searchImage} alt="" />
                <input className='jobTitleText' type="search" value={searchJob} name="" id="" placeholder='Job title or keyword' onChange={(e) => setSearchJob (e.target.value)} />
              </div>
              <hr />
              <div className='LocationSearch'>
                <img  className='searchIcon' src= {locationIcon} alt="" />
                <input className='LocationText' type="search" value={searchLocation} name="" id="" placeholder='Bandung, Indonesia' onChange={(e) => setSearchLocation (e.target.value)} />
              </div>
              <Link to ='/JobSearchResults'><button className='SearchBtn'>Search</button></Link>
              
            </div>
          </div>
    </div>
  )
}

export default SearchBar