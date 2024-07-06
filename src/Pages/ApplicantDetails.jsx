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
            <p>
              Email address <br />
              Bogdan@gmail.com
            </p>
          </div>
          <hr className="hr-line" />
          <div>
            <p>
              phone number: <br /> (307) 555-0133
            </p>
          </div>
          <hr className="hr-line" />
          <div>
            <p>
              address: <br /> 2118 Thornridge Cir
            </p>
          </div>
          <hr className="hr-line" />
          <div>
            <p>
              Skill level: <br />
              Senior Level
            </p>
          </div>
        </div>
      </div>
      <div className="bandu">
        <div className="bandc">
          <div className="biography"><a href="Biography">Biography</a></div>
          <div><a href="Job experience">Job Experience</a></div>
          <div><a href="Skills">Skills</a></div>
          <div><a href="Education">Education</a></div>
          <div><a href="Portfolio">Portfolio</a></div>
          <div><a href="Language">Language</a></div>
          <div className="contact">
            <div><a href="Contact">Contact</a></div>
            <div><a href="Intrest">Intrest</a></div>
            <div><a href="Recomendation">Recomendation</a></div></div>
          </div>
          <div className="userinterface">
            <div className="imb"><img src={bblogo} alt="" className="bblogo"/> 
            <h4>User Interface Designer</h4><br />
            <span>Bukalapak . jakarta, Indonesia</span></div>
            <div><p>August 2017- june 2021</p></div>
            <div className="writeup">Collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals and experience. Execute all visual design stages from concept to final hand-off to engineering. Conceptualize original ideas that bring simplicity and user friendliness to complex design roadblocks. Create wireframes, storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas. </div>
          </div>
        </div>
    </>
  );
};

export default ApplicantDetails;
