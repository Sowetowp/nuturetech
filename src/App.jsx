
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ApplicantDetails from "./Pages/ApplicantDetails";
import Layout from "./Pages/Layout";
import HeroSection from './Components/HeroSection'
import SearchBar from './Components/SearchBar'
import EmployerLog1 from './Pages/EmployerLog1'
import EmployerLog2 from './Pages/EmployerLog2'
 refs/remotes/origin/master
 refs/remotes/origin/master

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}/>
          <Route path='/applicantdetails' element={<ApplicantDetails/>}/>
          <Route path='/applicantdetails' element={<ApplicantDetails />} />
          <Route path='/employerlog1' element={<EmployerLog1 />} />
          <Route path='/employerlog2' element={<EmployerLog2 />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
