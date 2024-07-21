import React from 'react'
import '../Styles/HeroSection.css'
import manImage from '../assets/MAN 1 (1).png'
import card1 from '../assets/Frame 1.png'
import card2 from '../assets/Frame 28.png'
import SearchBar from './SearchBar'
const HeroSection = () => {
  return (
    <div className='Hero'>
        <div className='Hero-right'>
          <h1 >
              Elevate Your Career, Navigate the Tech Landscape with Precision. 
          </h1>
          <p >Trending Jobs keyword :</p>
          <div className='hero-subs'>
              <p>Web Designer</p>
              <p>UI/UX Designer</p>
              <p>Frontend</p>
              <p>Data Scientist</p>
            
          </div>
          <SearchBar className='SearchBar' />
       </div>

      <div className='Hero-left'>
        <img  className='card1' src={card1} alt="" />
        <img className='card2' src={card2} alt="" />
        <img className='manImage' src={manImage} alt="" />
      </div>
   </div>
  )
}

export default HeroSection