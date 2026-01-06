import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import EmiCheck from "./components/EmiCheck";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Enquiry from "./CRM/Enquiry";
import ViewEnquiry from './CRM/ViewEnquiry';
import ViewApprovedEnquiry from './CRM/ViewApprovedEnquiry';
import ViewRejectedEnquiry from './CRM/ViewRejectedEnquiry';
import CibilCheck from "./OE/CibilCheck";
import DocumentVerify from "./OE/DocumentVerify";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import MultiStepForm from "./MultiStepForm/MultiStepForm.jsx";


function App() {
  return (
    <BrowserRouter>
    
      <Header />  {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />  {/* Default landing page */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/emicheck" element={<EmiCheck />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path='/viewenquiry' element={<ViewEnquiry></ViewEnquiry>}></Route>
        <Route path='/viewapprovedenquiry' element={<ViewApprovedEnquiry></ViewApprovedEnquiry>}></Route>
        <Route path='/viewrejectedenquiry' element={<ViewRejectedEnquiry></ViewRejectedEnquiry>}></Route>
        <Route path='/cibilcheck' element={<CibilCheck></CibilCheck>}></Route>
        <Route path='/documentverify' element={<DocumentVerify></DocumentVerify>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/apply-loan/:customerId" element={<MultiStepForm />} />

      </Routes>
      <Footer />  {/* Footer always visible */}
    
    </BrowserRouter>
  );
}

export default App;
