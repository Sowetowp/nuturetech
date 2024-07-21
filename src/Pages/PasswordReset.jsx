import React from 'react'
import Success from '../assets/Success.png'
import Navbar from '../Components/Navbar'


const PasswordReset = () => {
    return (
        <>
            <Navbar />
            <section style={{ width: "100%", backgroundColor: "#EFEFEF", paddingTop: "50px" }}>
                <div style={{ backgroundColor: "white", width: "50%", paddingBottom: "150px", margin: "auto", marginTop: "50px" }}> <br />
                    <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "45px", wordBreak: "break-all" }}>Successful.</h1>
                    <p style={{ textAlign: "center", fontWeight: "500", fontSize: "20px" }}>Your password has been successfully updated.</p>
                    <img style={{ width: "15%", marginLeft: "43%" }} src={Success} alt="Image" /> <br /> <br />
                    <button style={{ height: "40px", backgroundColor: "#005B00", color: "white", border: "none", borderRadius: "5px", marginTop: "10px", font: "10px", width: "70%", marginLeft: "16%", fontWeight: "500" }} type='submit'>BACK TO LOGIN</button>
                </div>
                <div style={{ width: "100%", backgroundColor: "white", height: "70px", marginTop: "50px" }}></div>
            </section>
        </>
    )
}

export default PasswordReset