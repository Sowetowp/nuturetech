import React from 'react'
import Navbar from '../Components/Navbar'
import '../Styles/jobdescription.css'
import netflix from '../assets/Frame 33705.svg'
import notification from '../assets/notification.svg'
import share from '../assets/notification (1).svg'
import Ava from '../assets/Avatar.svg'
import Avat from '../assets/Avatar (1).svg'
import Avata from '../assets/Avatar (2).svg'
import Num from '../assets/+5.svg'
const Jobdescription = () => {
  return (
    <div>
      <Navbar />
      <div className='background'>
        <div className='wholediv'>
          <div>
            <img src={netflix} />
          </div>
          <div className='netdiv'>
            <div className='netflixtext'>
              <h3>User Interface Designer </h3>
              <h6 className='netfi'>Netflix.Texas,US.2 days ago</h6>
            </div>
            <div className='netdi'>
              <img src={notification} />
              <img src={share} />
              <h4 className='APP'>APPLICATION SUBMITTED</h4>
            </div>
          </div>
          <div>
            <div className='Avatar'>
              <img src={Ava} />
              <img src={Avat} />
              <img src={Avata} />
              <img src={Num} />
              <div>
                <h6>Eight friends work here</h6>
              </div>
            </div>
            <div className='border'>
              <div className='listing'>
                <div><h6 className='list'>Experience</h6>
                  <h6>2-4 years</h6></div>

                <div><h6 className='list'>Seniority level</h6>
                  <h6>Senior Level</h6></div>

                <div><h6 className='list'>Employment</h6>
                  <h6>Full Time</h6></div>

                <div><h6 className='list'>salary</h6>
                  <h6>$350-$400</h6></div>
              </div>
            </div>
            <div className='describe'>
              <h4>Description</h4>
              <div className='des'>

                <h5 className='h5'>Collaborate with product mangament and engineering to define and implement innovative solutions for the product direction, visuals and expxperience.</h5>
                <h5 className='h5'>Execute all visual design stages from concept to final hand-off to engineering. Conceputualize original ideas that bring simplicity and user friendlines to</h5>
                <h5 className='h5'>complex design roadblocks. Create wireframes,storyboards, user flows, process flows and site maps to effectively communicate interaction and design ideas. </h5>
                <h5 className='h5'>Present and defend designs and key milestone deliverables to peers and executive level stakeholders. Conduct user research and evaluate user feedback.</h5>
              </div>
            </div>
            <div className='res'>
              <h4>Responsiblility</h4>
              <div className='respo'>
                <ul className='custom-bullets'>
                  <li>Responsibilities Identify problems based on the product vision / requirements and come up with delightful design solutions & deliverables.</li>
                  <li>Conduct design process best practices across projects such as gathering insights, validating problems & solutions, delivering multiple fidelity levels of design, and ensure the final design is implemented properly on production.</li>
                  <li>Collaborate with Interaction Designers (Design System team) to ensure the implementation of proper design components and patterns and/or improving existing design libraries.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobdescription