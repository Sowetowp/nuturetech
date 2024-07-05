import React from 'react'
import logo from "../assets/Frame 11.svg"
import "../Styles/Style.css"
const Navbar = () => {
    return (
        <>
            <header className='myHeader'>
                <div>
                    <img src={logo} alt="" />
                    <span>
                        <a href="">Home</a>
                        <a href="">Companies</a>
                    </span>
                </div>
            </header>
        </>
    )
}

export default Navbar