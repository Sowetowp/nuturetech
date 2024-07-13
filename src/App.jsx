import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ApplicantDetails from './Pages/ApplicantDetails'
import Layout from './Pages/Layout'
import HeroSection from './Components/HeroSection'
import SearchBar from './Components/SearchBar'
import JobSearchResult from './Pages/JobSearchResult'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/applicantdetails' element={<ApplicantDetails/>}/>
          <Route path='/JobSearchResults' element={JobSearchResult} />
        </Routes>
      </Router>
    </>
  )
}

export default App
