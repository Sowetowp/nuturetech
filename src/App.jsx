import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ApplicantDetails from "./Pages/ApplicantDetails";
import Layout from "./Pages/Layout";
import Jobdescription from "./Pages/Jobdescription";
import EmployerLog1 from "./Pages/EmployerLog1";
import EmployerLog2 from "./Pages/EmployerLog2";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/applicantdetails" element={<ApplicantDetails />} />
        <Route path="/jobdescription" element={<Jobdescription />} />
        <Route path="/employerlog1" element={<EmployerLog1 />} />
        <Route path="/employerlog2" element={<EmployerLog2 />} />
      </Routes>
    </Router>
  );
}
