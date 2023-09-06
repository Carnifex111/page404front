import Router from "../../router/router";
import ParticlesBackground from "../particlesBackground/particlesBackground";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./app.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <div className="wrap-app">
        <Router />
      </div>
      <ParticlesBackground />
    </BrowserRouter>
  );
};

export default App;
