import Router from "../../router/router";
import ParticlesBackground from "../particlesBackground/particlesBackground";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./app.scss";

const App = () => {
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
