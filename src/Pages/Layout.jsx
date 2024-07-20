 
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

import React from "react";
import Navbar from "../Components/Navbar";
import face_logo from "../assets/facelogo.png";
import bblogo from "../assets/bblogo.png"
import "../../src/Pages/Layouts.css";
import box1 from "../assets/box1.png"
import box2 from "../assets/box2.png"
import box3 from "../assets/box3.png"
import green from "../assets/green.png"
import time from "../assets/time.png"

const Layout = () => {
  return (
    <>
    <Navbar />
    <div className="layouts">
      <div className="container">
        <div className="contactInfo">
          <div className="facename">
            <div className="face2">
              <img src={face_logo} alt="" className="face1" />
              <div>
                <h1>Bogdan Krivenchenco </h1>
                <span className="user">user interface design</span>
              </div>
            </div>
          </div>
          <button className="contact">Contact</button>
        </div>
        <div className="contactprofile">
          <div>
            <p className="yyyy">Email address </p>
            <h4>Bogdan@gmail.com</h4>
          </div>
          <hr className="hr-line" />
          <div>
            <p className="yyyy">phone number</p>
            <h4>(307) 555-0133</h4>
          </div>
          <hr className="hr-line" />
          <div>
            <p className="yyyy">address </p>
            <h4>2118 Thornridge Cir</h4>
          </div>
          <hr className="hr-line" />
          <div>
            <p className="yyyy">Skill level</p>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="sidebar">
          <div className="cir1">
            <nav>
              <ul>
                <li><a href="" style={{color:"green"}}>Biograghy </a></li>
                <li><a href="">Job Experience</a></li>
                <li><a href="">Skill</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Language</a></li>
              </ul>
            </nav>
            </div>
            <div className="cir">
              <nav>
              <ul>
                <li><a href="">Contact</a></li>
                <li><a href="">intrest</a></li>
                <li><a href="">Recomendtion</a></li>
              </ul>
            </nav>
            </div>
        </div>
        <div className="main-page">
          <div className="">
            <div className="blogo11">
              <div className="blogo2">
                <img src= {bblogo} alt="" className="bblogo"/>
            <div>
            <h4>User Interface Designer</h4>
            <p className="buka">Bukalapak . jakarta, Indonesia</p></div>  
            </div>
            <div className="buka1"><img src={time} alt="" style={{width:"20px", height:"20px"}} /><div><p>August 2017- june 2021</p></div></div>
            </div>
            <div className="writeup">
              <p>Collaborate with product management and engineering to define and implement innovative solutions<br />
              the product direction, visuals and experience.Execute all visual design stages from concept to final hand<br />
              off to engineering, Conceptualize original ideas that bring simplicity and user friendliness to complex<br />
              design roadblocks. Create wireframes, storyboards, user flows, process flows and site maps to effectively<br />
              communicate interaction and design ideas.
              </p>
            </div>
            <div className="boxpic">
              <img src= {box1} alt="" className="boxes"/>
              <img src={box2} alt="" className="boxes"/>
              <img src= {box3} alt="" className="boxes"/>
            </div>
            <hr className="hrw" />
            <div className="blogo1">
              <div className="blogo2">
                <img src= {green} alt="" className="bblogo"/>
                <div>
                  <h4>Product Designer</h4>
                  <p className="buka">Gojek.jarkata.Indonesia</p>
                </div>
              </div>
              <div className="buka1"><img src={time} alt="" style={{width:"20px", height:"20px"}} /><div><p>August 2017- june 2021</p></div></div>
            </div>
            <div className="writeup"><p>The visual Designer convey design concept into fireframes and high fidelity, quality prototypes that <br />
            match project requirement product objective brand personality or brand language of travel</p></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
 af00efff2d7af15a4a82a498845819e9b3c4b341

export default Layout;