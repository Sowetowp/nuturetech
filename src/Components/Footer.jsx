import React from 'react'
import '../Styles/Footer.css'
import NthLogo from '../assets/NthLogowhite.svg'
import message1 from '../assets/Message.svg'
import message2 from '../assets/Message (1).svg'
import message3 from '../assets/Message (2).svg'
import Logo1 from '../assets/1.svg'
import Logo2 from '../assets/2.svg'
import Logo3 from '../assets/3.svg'

const Footer = () => {
  return (
      <div>
          <div className='Footer'>
              <div className='LogoAndMail'>
                  <img src={NthLogo} alt="" />
                  <div className='AllLogo'>
                      <div className='Mail'>
                          <img src={message1} alt="" />
                          <div className='MailMessage'>
                              <p className='HeadText'>Mail Us</p>
                              <p className='SubText'>Info@nurturehub.com</p>
                          </div>
                        </div>  
                          <div className='Mail'>
                              <img src={message2} alt="" />
                              <div className='MailMessage'>
                                  <p className='HeadText'>Call Us</p>
                                  <p className='SubText'>+01 569 896 654</p>
                             </div>
                          </div>
                          <div className='Mail'>
                                  <img src={message3} alt="" />
                                  <div className='MailMessage'>
                                      <p className='HeadText'>Location</p>
                                      <p className='SubText'>Lagos, Nigeria</p>
                                  </div>
                          </div>
                        </div>
                  </div>
                <hr />
                <div className='FooterBottom'>
                    <div className='FooterBottomRight'>
                        <p>Nurture TechHub is your all-in-one solution for tech career advancement and talent acquisition. Join us to access a vibrant community and limitless opportunities in the ever-evolving world of technology. Let's shape the future together!</p>
                        <div className='SocialLogos'>
                            <img src={Logo1} alt="" />
                            <img src={Logo2} alt="" />
                            <img src={Logo3} alt="" />

                        </div>
                    </div>
                    <div className='verticalLine1'></div>
                    <div className='FooterBottomMiddle'>
                       <div className='FooterBottomMiddle1'>
                             <p>Explore</p>
                            <div className='FooterList'>
                                <ul className='list'>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Gallery</a></li>
                                    <li><a href="">Offers</a></li>
                                    <li><a href="">Pricing</a></li>
                                    <li><a href="">FAQ</a></li>
                                </ul>
                            </div>
                       </div>
                       <div className='FooterBottomMiddle2'>
                             <p>Quick Links</p>
                            <div className='FooterList'>
                               <ul className='list'>
                                    <li><a href="">Services</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Service Request</a></li>                                 
                                    <li><a href="">Estimation Calculator</a></li>
                               </ul>
                            </div>
                       </div>
                    </div>
                      <div className='verticalLine1'></div>

                    <div>
                        
                    </div>
                    <div className='GetJobNotifcation'>
                        <p className='p1'>Get job notifications</p>
                        <p className='p2'>The latest job news, articles, sent to your inbox weekly.</p>
                        <span className='NotificationEmail'>
                            <input type="email" name="" id="" placeholder='Enter your Email address' />
                            <button className='NotificationBtn' type="submit">Subscribe</button>
                        </span>
                    </div>
                </div>
                
                <hr />
                <p className='copyright'>Copyright © Nuturehub 2024</p>

            </div>
        </div>
  )
}

export default Footer