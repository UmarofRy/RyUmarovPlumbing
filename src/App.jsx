import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./contact";
import Home from "./Home";
import About from "./about";
import Videos from "./Videos";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
