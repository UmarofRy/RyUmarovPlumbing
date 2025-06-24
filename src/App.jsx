import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./contact";
import Home from "./Home";
import Project from "./project";
import About from "./about";
import Services from "./Services";
import ScrollToTop from './ScrollToTop'





function App() {






  return (
    <div>
          <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/project' element={<Project/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            
          </Routes>

    </div>
  );
}

export default App;
