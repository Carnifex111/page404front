import Router from "../../router/router";
import ParticlesBackground from "../particlesBackground/particlesBackground";
import { BrowserRouter } from "react-router-dom";
import Navbar from '../navbar/navbar';

const App = () => {
  return (
    
    <BrowserRouter>
    <div className="overlay">
      <Navbar/>
      <Router/>
      <ParticlesBackground/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
