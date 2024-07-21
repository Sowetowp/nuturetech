import React from 'react'
import googleicon from '../assets/googleicon.png'
import linkedin from '../assets/LinkedinIcon.png'
import Navbar from '../Components/Navbar'


const LogIn = () => {
    return (
        <>
            <Navbar />
            <section style={{ width: "100%", backgroundColor: "#EFEFEF", paddingTop: "50px" }}>
                <div style={{ backgroundColor: "white", width: "50%", paddingBottom: "70px", margin: "auto" }}> <br />
                    <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "45px" }}>Sign In To Your Account</h1>
                    <p style={{ textAlign: "center", fontWeight: "500", fontSize: "20px" }}>Don’t have an account?<a style={{ color: "#005B00", textDecoration: "none" }} href="">Sign Up</a></p>

                    <form style={{ marginLeft: "15%" }}>
                        <label style={{ fontWeight: "600", fontSize: "15px", borderColor: "grey", marginTop: "10px", marginBottom: "5px" }} htmlFor="">Email</label> <br />
                        <input style={{ width: "80%", paddingBottom: "10px", paddingTop: "10px" }} className='' type="text" placeholder='  name@gmail.com' />
                        <br />
                        <label style={{ fontWeight: "600", fontSize: "15px", borderColor: "grey", marginTop: "20px", marginBottom: "5px" }} htmlFor="">Password</label> <br />
                        <input style={{ width: "80%", paddingBottom: "10px", paddingTop: "10px" }} type="text" placeholder=' ****************' />
                    </form>


                    <div style={{ display: "flex", marginTop: "20px" }}>
                        <hr style={{ width: "26%", marginLeft: "15.5%" }} />
                        <p style={{ marginLeft: "6%", color: "gray", fontSize: "small", marginTop: "1%" }}>OR</p>
                        <hr style={{ width: "26%", marginLeft: "6%" }} />
                    </div>


                    <div style={{ marginLeft: "15%", marginTop: "20px" }}>

                        <button style={{ width: "80%", paddingTop: "15px", marginBottom: "5%", backgroundColor: "white", borderColor: "grey", borderWidth: "1px",display:"flex",gap:"25%" }} type='button'><img style={{ width: "7%", marginTop:'-10px',marginLeft:'5px'}} src={googleicon} alt="Google Icon" /> Continue with Google</button>
                        <button style={{ width: "80%", display: "flex", paddingTop: "15px", backgroundColor: "white", borderColor: "grey", borderWidth: "1px",display:"flex", gap:"25%" }} type='button'><img style={{ width: "7%", marginTop:'-10px',marginLeft:'5px' }} src={linkedin} alt="LinkedIn Icon" />Continue with LinkedIn</button>

                    </div>

                    <button style={{ height: "40px", backgroundColor: "#005B00", color: "white", border: "none", borderRadius: "5px", marginTop: "5%", fontSize: "15px", width: "40%", marginLeft: "30%", fontWeight: "600" }} type='submit'>LOG IN</button>
                    <p style={{ fontSize: "13px", fontWeight: "500", textAlign: "center", marginTop: "15px" }}>By signing up, I agree to the Nuture TechHub <a style={{ color: "#005B00", textDecoration: "none" }} href="">Privacy Policy</a> and <a style={{ color: "#005B00", textDecoration: "none" }} href="">Terms of Service</a> </p>
                </div>
                <div style={{ width: "100%", backgroundColor: "white", height: "70px", marginTop: "50px" }}></div>
            </section>
        </>
    )
}

export default LogIn