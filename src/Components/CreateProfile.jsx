import React from 'react'
import '../Styles/CreateProfile.css'
import image1 from '../assets/White woman.png'
import image2 from '../assets/Frame 29.png'
import image3 from '../assets/Frame 54.png'
import { Link } from 'react-router-dom'


const CreateProfile = () => {
  return (
    <div>
        <div className='CreateProfile'>
            <div>
                <img className='woman' src={image1} alt="" />
                <img className='smallCard1' src={image2} alt="" />
                <img className='smallCard2' src={image3} alt="" />
            </div>
            <div className='CreateProfileTexts'>
                <h5>Create Profile</h5>
                <p className='p1Text'>Build Your Personal  Account Profile</p>
                <p className='p2Text'>Create an account for the job information you want, get daily notifications and you can easily apply directly to the company you want and create an account now for free</p>
                <Link to = '/ '><button>Creat Account</button></Link>

            </div>
        </div>
    </div>
  )
}

export default CreateProfile