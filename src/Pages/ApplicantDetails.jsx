import React from "react";
import "../Styles/DashboardHero.css";
import face_logo from "../assets/facelogo.png";
import Navbar from "../Components/Navbar";
import bblogo from "../assets/bblogo.png";

const ApplicantDetails = () => {
  return (
    <>
    <Navbar />
      <div className="container">
        <div className="contactInfo">
          <div className="facename">
            <div className="face2">
              {" "}
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
      <div className="bandu">
        <div className="bio">
          <div className="biog">
            <nav>
              <ul>
                <li><a href="">Biograghy</a></li>
                <li><a href="">Job Experience</a></li>
                <li><a href="">Skill</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Language</a></li>
              </ul>
            </nav>
          </div>
          <div className="contact2">
            <nav>
              <ul>
                <li><a href="">Contact</a></li>
                <li><a href="">intrest</a></li>
                <li><a href="">Recomendtion</a></li>
              </ul>
            </nav>

          </div>
        </div>
        <div className="bio2">
          <div className="bio3">
          <div><img src= {bblogo} alt="" className="bblogo" />
          <div className="bio4">
          <h4>User Interface Designer</h4>
          <p>Bukalapak . jakarta, Indonesia</p>
          </div>
          </div>
          <div>August 2017- june 2021</div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ApplicantDetails;
