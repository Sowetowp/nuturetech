import React from 'react'
import logo from "../assets/Frame 11.svg"
import "../Styles/Navbar1.css"
import { Link } from 'react-router-dom'
const Navbar1 = () => {
    return (
        <>
            <header className='myHeader' style={{display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 80px", backgroundColor:"#f8f8f8" }}>
                <div style={{width:"50%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <img src={logo} alt="" style={{width:"100px"}}/>
                    <span className='gone' style={{gap:"10px", display:"flex", justifyContent:"space-between", width:"224px", fontWeight:"500" }}>
                        <Link href="#" style={{textDecoration:"none", color:"#00E45B", fontSize:"16px"}}>Home</Link>
                        <Link href="" style={{textDecoration:"none", color:"#005B00", fontSize:"16px"}}>Companies</Link>
                    </span>
                </div>
                <div className=''>
                   <Link><button className='loginBtn'>Sign In </button></Link>
                </div>
            </header>
        </>
    )
}

export default Navbar1