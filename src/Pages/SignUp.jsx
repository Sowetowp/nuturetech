import React from 'react'
import googleicon from '../assets/googleicon.png'
import facebook from '../assets/Facebook.png'
import Navbar from '../Components/Navbar'


const SignUp = () => {
    return (
        <>
            <Navbar />
            <section style={{ width: "100%", backgroundColor: "#EFEFEF", paddingTop: "50px" }}>
                <div style={{ backgroundColor: "white", width: "50%", paddingBottom: "70px", margin: "auto" }}>
                    <h1 style={{ textAlign: "center", fontWeight: "700", fontSize: "45px" }}>Create an Account</h1>
                    <p style={{ textAlign: "center", fontWeight: "500", fontSize: "20px" }}>Have an account?<a style={{ color: "#005B00", textDecoration: "none" }} href="">Sign In</a></p>

                    <form style={{ marginLeft: "15%" }}>
                        <label style={{ fontWeight: "600", fontSize: "15px", marginTop: "10px", marginBottom: "5px" }} htmlFor="">Email</label> <br />
                        <input style={{ width: "80%", paddingBottom: "10px", paddingTop: "10px" }} className='' type="text" placeholder='  name@gmail.com' />
                        <br />

                        <div style={{display:"flex" }}>
                        <form>
                            <label style={{ fontWeight: "600", fontSize: "100%", marginTop: "20px", marginBottom: "5px" }} htmlFor="">First Name</label> <br />
                            <input style={{ width: "100%", paddingBottom: "10px", paddingTop: "10px" }} className='' type="text" placeholder='  First Name' />
                        </form>
                        <form>
                            <label style={{ fontWeight: "600", fontSize: "100%", marginTop: "20px", marginBottom: "5px", marginLeft: "25%" }} htmlFor="">Last Name</label><br />
                            <input style={{ width: "100%", paddingBottom: "10px", paddingTop: "10px", marginLeft: "25%" }} className='' type="text" placeholder='  Last Name' /> <br />
                        </form>
                        </div>


                        <label style={{ fontWeight: "600", fontSize: "15px", marginTop: "20px", marginBottom: "5px" }} htmlFor="">Password</label> <br />
                        <input style={{ width: "80%", paddingBottom: "10px", paddingTop: "10px" }} type="text" placeholder=' ****************' />
                    </form>

                    <div style={{ display: "flex", marginTop: "20px" }}>
                        <hr style={{ width: "26%", marginLeft: "15.5%" }} />
                        <p style={{ marginLeft: "5%", color: "gray",fontSize:"10px", marginTop: "1%" }}>OR</p>
                        <hr style={{ width: "26%", marginLeft: "6%" }} />
                    </div>


                    <div style={{ marginLeft: "15%", marginTop: "20px" }}>

                        <button style={{ width: "80%", paddingTop: "15px", marginBottom: "5%", backgroundColor: "white", borderColor: "grey", borderWidth: "1px", display: "flex", gap: "25%" }} type='button'><img style={{ width: "7%", marginTop: '-10px', marginLeft: '5px' }} src={googleicon} alt="Google Icon" /> Continue with Google</button>
                        <button style={{ width: "80%", paddingTop: "15px", backgroundColor: "white", borderColor: "grey", borderWidth: "1px", display: "flex", gap: "25%" }} type='button'><img style={{ width: "7%", marginTop: "-10px", marginleft: "" }} src={facebook} alt="Facebook Icon" /> Continue with Facebook</button>
                    </div>

                    <button style={{ height: "40px", backgroundColor: "#005B00", color: "white", border: "none", borderRadius: "5px", marginTop: "5%", fontSize: "15px", width: "40%", marginLeft: "30%", fontWeight: "600" }} type='submit'>SIGN UP</button>
                    <p style={{ fontSize: "13px", fontWeight: "500", textAlign: "center", marginTop: "15px" }}>By signing up, I agree to the Nuture TechHub <a style={{ color: "#005B00", textDecoration: "none" }} href="">Privacy Policy</a> and <a style={{ color: "#005B00", textDecoration: "none" }} href="">Terms of Service</a> </p>
                </div>
                <div style={{ width: "100%", backgroundColor: "white", height: "70px", marginTop: "50px" }}></div>
            </section>
        </>
    )
}

export default SignUp