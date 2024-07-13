HEAD
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ApplicantDetails from "./Pages/ApplicantDetails";
import Layout from "./Pages/Layout";

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ApplicantDetails from './Pages/ApplicantDetails'
import Layout from './Pages/Layout'
<<<<<<< HEAD
import HeroSection from './Components/HeroSection'
import SearchBar from './Components/SearchBar'
import JobSearchResult from './Pages/JobSearchResult'
function App() {
=======
 HEAD
import Jobdescription from './Pages/Jobdescription'
>>>>>>> af00efff2d7af15a4a82a498845819e9b3c4b341

import EmployerLog1 from './Pages/EmployerLog1'
import EmployerLog2 from './Pages/EmployerLog2'
 refs/remotes/origin/master
 refs/remotes/origin/master
function App() {
  return (
    <>
      <Router>
        <Routes>
 HEAD
          <Route path='/' element={<Layout/>}/>
          <Route path='/applicantdetails' element={<ApplicantDetails/>}/>
<<<<<<< HEAD
          <Route path='/JobSearchResults' element={JobSearchResult} />
=======
          <Route path='/jobdescription' element={<Jobdescription/>}/>
        </Routes> 

 HEAD
          <Route path="/" element={<Layout />} />
          <Route path="/applicantdetails" element={<ApplicantDetails />} />

          <Route path='/' element={<Layout />} />
          <Route path='/applicantdetails' element={<ApplicantDetails />} />
          <Route path='/employerlog1' element={<EmployerLog1 />} />
          <Route path='/employerlog2' element={<EmployerLog2 />} />

>>>>>>> af00efff2d7af15a4a82a498845819e9b3c4b341
        </Routes>
 
      </Router>
    </>
  );
}

export default App;
