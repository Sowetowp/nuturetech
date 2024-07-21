import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ApplicantDetails from './Pages/ApplicantDetails'
import Layout from './Pages/Layout'
import LogIn from './Pages/LogIn'
import ForgotPassword from './Pages/ForgotPassword'
import Checkmail2 from './Pages/Checkmail2'
import PasswordReset from './Pages/PasswordReset'
import SignUp from './Pages/SignUp'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/applicantdetails' element={<ApplicantDetails/>}/>
          <Route path='/LogIn' element={<LogIn/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/Checkmail2' element={<Checkmail2/>}/>
          <Route path='/PasswordReset' element={<PasswordReset/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
