import React from 'react'
import Navbar from '../Components/Navbar'
import Checkpage from '../assets/Checkpage.jpg'

const Checkmail2 = () => {
    return (
        <>
            <Navbar />
            <section style={{ width: "100%", backgroundColor: "#EFEFEF", paddingTop: "50px" }}>
                <div style={{ backgroundColor: "white", width: "50%", paddingBottom: "70px", margin: "auto" }}> <br />
                    <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "45px" }}>Check your email.</h1>
                    <p style={{ textAlign: "center", fontWeight: "500", fontSize: "20px" }}>A reset password has been sent to your email<br />address <span style={{ color: "#00E45B", fontWeight: "500", wordBreak: "break-all" }}> Samanthdavies@gmail.com</span></p>
                    <img style={{ width: "15%", marginLeft: "43%" }} src={Checkpage} alt="Image" /> <br /> <br />
                    <button style={{ height: "40px", backgroundColor: "#005B00", color: "white", border: "none", borderRadius: "5px", marginTop: "10px", font: "10px", width: "70%", marginLeft: "16%", fontWeight: "500" }} type='submit'>BACK TO LOGIN</button>
                    <p style={{ fontSize: "13px", fontWeight: "500", textAlign: "center", marginTop: "15px" }}>You have not received a mail?<a style={{ color: "#005B00" }} href="">Resend</a></p>
                </div>
                <div style={{ width: "100%", backgroundColor: "white", height: "70px", marginTop: "50px" }}></div>
            </section>
        </>
    )
}

export default Checkmail2