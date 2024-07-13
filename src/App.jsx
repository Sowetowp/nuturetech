import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ApplicantDetails from './Pages/ApplicantDetails'
import Layout from './Pages/Layout'
import Jobdescription from './Pages/Jobdescription'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/applicantdetails' element={<ApplicantDetails/>}/>
          <Route path='/jobdescription' element={<Jobdescription/>}/>
        </Routes> 
      </Router>
    </>
  )
}

export default App
