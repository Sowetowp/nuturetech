import React from 'react'
import Image1 from '../assets/SlackLogo.svg'
import Image2 from '../assets/googlelogo.svg'
import Image3 from '../assets/Airbnb.svg'
import Image4 from '../assets/Logo.svg'
import '../Styles/CompanyLogosSection.css'

const CompanyLogoSection = () => {
  return (
    <div className='CompanyLogoSection'>
        <h5>Join Most Well Known Companies Around The World</h5>
        <div className='Logos'>
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
        </div>
    </div>
  )
}

export default CompanyLogoSection