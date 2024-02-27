import React from "react";
//import pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
//import routes route & useLocation hook
import { Routes, Route } from "react-router";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default HomeRoutes;
