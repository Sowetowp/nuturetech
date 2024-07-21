import React from 'react'
import Password from '../assets/Passwordicon.png'
import Navbar from '../Components/Navbar'


const ForgotPassword = () => {
    return (
        <>
            <Navbar />
            <section style={{ width: "100%", backgroundColor: "#EFEFEF", paddingTop: "50px" }}>
                <div style={{ backgroundColor: "white", width: "50%", paddingBottom: "150px", margin: "auto", marginTop: "50px" }}> <br />
                    <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "45px", wordBreak: "break-all" }}>Forgot password?</h1>
                    <p style={{ textAlign: "center", fontWeight: "500", fontSize: "20px" }}>To reset password,use your email or phone <br /> number.</p>
                    <img style={{ width: "15%", marginLeft: "42%", }} src={Password} alt="Image" /> <br /> <br />

                    <form style={{ marginLeft: "20%" }}>
                        <label style={{ fontWeight: "600", fontSize: "15px", marginTop: "10px", marginBottom: "5px" }} htmlFor="">Email</label> <br />
                        <input style={{ width: "80%", paddingBottom: "10px", paddingTop: "10px" }} className='' type="text" placeholder='name@gmail.com' />
                        <br />
                        <label style={{ fontWeight: "600", fontSize: "15px", marginTop: "20px", marginBottom: "5px" }} htmlFor="">Phone number</label> <br />
                        <input style={{ width: "80%", paddingBottom: "10px", paddingTop: "10px" }} type="text" placeholder='+2348154645780' />
                    </form>
                    <button style={{ height: "40px", backgroundColor: "#005B00", color: "white", border: "none", borderRadius: "5px", marginTop: "60px", fontSize: "15px", width: "40%", marginLeft: "32%", fontWeight: "600" }} type='submit'>RESET PASSWORD</button>
                </div>
                <div style={{ width: "100%", backgroundColor: "white", height: "70px", marginTop: "50px" }}></div>
            </section>
        </>
    )
}

export default ForgotPassword