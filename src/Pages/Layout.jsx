
import React from 'react'
import HeroSection from '../Components/HeroSection'
import Navbar1 from '../Components/Navbar1'
import CompanyLogoSection from '../Components/CompanyLogoSection'
import JobCategories from '../Components/JobCategories'
import CreateProfile from '../Components/CreateProfile'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Layout = () => {
    return (
        <>
            <Navbar1/>
            <HeroSection/>
            <CompanyLogoSection/>
            <JobCategories/>
            <CreateProfile/>
            <NewsLetter/>
            <Footer/>
            
        </>
    )
}

export default Layout;