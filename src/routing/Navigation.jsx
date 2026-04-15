import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/Home';
import Services from '../pages/Services';
import Contact from '../pages/Contact';

function Navigation() {
  return (
    
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  </BrowserRouter>
)
}

export default Navigation
