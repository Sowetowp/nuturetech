import React from 'react'
import logo from "../assets/Frame 11.svg"
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

            </header>
        </>
    )
}

export default Navbar