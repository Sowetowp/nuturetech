import React from 'react'
import logo from "../assets/Frame 11.svg"
import bell from "../assets/Vector.svg"
import avi from "../assets/Ellipse 2.png"
import "../Styles/Style.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <header className='myHeader' style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                <div style={{width:"50%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                    <img src={logo} alt="" style={{width:""}}/>
                    <span style={{display:"flex", gap:"10px"}}>
                        <Link href="" style={{textDecoration:"none", color:"#00E45B", fontSize:"12px"}}>Home</Link>
                        <Link href="" style={{textDecoration:"none", color:"#005B00", fontSize:"12px"}}>Companies</Link>
                    </span>
                </div>
                <div style={{width:"50%", display:"flex", alignItems:"center", justifyContent:"end"}}>
                    <img src={bell} alt="" />
                    <img src={avi} alt="" />
                    <a href="">Post a Job</a>
                </div>
            </header>
        </>
    )
}

export default Navbar