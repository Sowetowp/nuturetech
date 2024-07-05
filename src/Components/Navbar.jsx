import React from 'react'
import logo from "../assets/Frame 11.svg"
import bell from "../assets/Vector.svg"
import avi from "../assets/Ellipse 2.svg"
import "../Styles/Style.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <header className='myHeader'>
                <div>
                    <img src={logo} alt="" />
                    <span>
                        <Link href="">Home</Link>
                        <Link href="">Companies</Link>
                    </span>
                </div>
                <div>
                    <img src={bell} alt="" />
                    <img src={} alt="" />
                </div>
            </header>
        </>
    )
}

export default Navbar