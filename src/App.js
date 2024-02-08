import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Projects from "../src/components/Projects/Projects";
import Footer from "../src/components/Footer";
import Resume from "../src/components/Resume/ResumeNew";
import {BrowserRouter as Router,Routes,Route, Navigate} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/scrolltotop" element={<ScrollToTop />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/resume" element={<Resume />} ></Route>
          <Route path="*" element={<Navigate to="/"/>} ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
